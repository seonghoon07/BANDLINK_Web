import axios from 'axios';
import { getRefreshToken } from './header';
import { TOKEN } from '@/shared/constants';
import {
  clearCookie,
  deleteCookie,
  getCookie,
  setCookie,
} from '@/shared/utils/cookie/cookie';

export const customAxios = axios.create({
  baseURL: import.meta.env.VITE_APPLICATION_KEY,
  timeout: 100000,
});

const refresh = async () => {
  await deleteCookie(TOKEN.ACCESS);
  const refreshToken = await getRefreshToken();
  const { data } = await customAxios.post('/auth/reissue', {
    token: refreshToken,
  });
  const newAccessToken = data.accessToken;
  await setCookie(TOKEN.ACCESS, newAccessToken);
  return newAccessToken;
};

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;

    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    try {
      request._retry = true;
      const newToken = await refresh();
      request.headers.Authorization = `Bearer ${newToken}`;
      return customAxios(request);
    } catch (refreshError) {
      clearCookie();
      return Promise.reject(refreshError);
    }
  }
);

customAxios.interceptors.request.use(
  async (config) => {
    const token = await getCookie(TOKEN.ACCESS);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
