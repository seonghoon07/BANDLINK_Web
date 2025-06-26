import { getCookie, setCookie } from '../cookie/cookie';
import { customAxios } from '@/shared/api';
import { RoleType } from '@/shared/types';

export const authorizeAccess = async (
  accessToken: string,
  refreshToken: string,
  currentUserType: RoleType
) => {
  const rolePathMap: Record<RoleType, string> = {
    BAND: 'band',
    FAN: 'fan',
    PLACE_OWNER: 'spaceOwner',
  };
  try {
    setCookie('accessToken', accessToken, { path: '/' });
    setCookie('refreshToken', refreshToken, { path: '/' });

    const checkAccess = getCookie('accessToken');
    const checkRefresh = getCookie('refreshToken');

    const { data: userInfo } = await customAxios.get('/users');

    if (checkAccess && checkRefresh && userInfo === '') {
      window.location.href = '/role';
    } else {
      const path = rolePathMap[currentUserType];
      window.location.href = `/${path}/dashboard`;
    }

    return true;
  } catch (error) {
    return error;
  }
};
