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

const plainAxios = axios.create({
  baseURL: import.meta.env.VITE_APPLICATION_KEY,
  timeout: 100000,
});

const refresh = async () => {
  deleteCookie(TOKEN.ACCESS);
  const refreshToken = await getRefreshToken();

  try {
    const { data } = await plainAxios.post('/auth/refresh', {
      refreshToken,
    });

    const newAccessToken = data.accessToken;
    setCookie(TOKEN.ACCESS, newAccessToken);
    return newAccessToken;
  } catch (err) {
    console.error('[REFRESH ERROR]', err);
    throw err;
  }
};

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;

    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    try {
      const newToken = await refresh();
      request.headers.Authorization = `Bearer ${newToken}`;
      return customAxios(request);
    } catch (refreshError) {
      alert('로그인이 만료되어 다시 로그인해주세요.');
      clearCookie();
      window.location.href = '/';
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
