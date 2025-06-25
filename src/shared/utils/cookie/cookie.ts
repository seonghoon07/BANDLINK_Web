import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any) => {
  const defaultOptions = {
    path: '/',
    ...options,
  };
  cookies.set(name, value, defaultOptions);
};

export const getCookie = (name: string) => cookies.get(name);

export const deleteCookie = (name: string) =>
  cookies.remove(name, { path: '/' });

export const clearCookie = () => {
  const allCookies = cookies.getAll();

  Object.keys(allCookies).forEach((key) => {
    cookies.remove(key, { path: '/' });
  });
};
