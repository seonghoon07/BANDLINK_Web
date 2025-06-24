import { getCookie, setCookie } from '../cookie/cookie';

export const authorizeAccess = async (
  accessToken: string,
  refreshToken: string
) => {
  try {
    setCookie('accessToken', accessToken, { path: '/' });
    setCookie('refreshToken', refreshToken, { path: '/' });

    const checkAccess = getCookie('accessToken');
    const checkRefresh = getCookie('refreshToken');

    if (checkAccess && checkRefresh) {
      window.location.href = '/role';
    }

    return true;
  } catch (error) {
    return error;
  }
};
