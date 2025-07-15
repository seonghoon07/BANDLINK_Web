import { Cookies } from 'react-cookie';
const cookies = new Cookies();
export const setCookie = (name, value, options) => {
    const defaultOptions = {
        path: '/',
        ...options,
    };
    cookies.set(name, value, defaultOptions);
};
export const getCookie = (name) => cookies.get(name);
export const deleteCookie = (name) => cookies.remove(name, { path: '/' });
export const clearCookie = () => {
    const allCookies = cookies.getAll();
    Object.keys(allCookies).forEach((key) => {
        cookies.remove(key, { path: '/' });
    });
};
