import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userType } from '@/shared/store/atom';
import { authorizeAccess } from '@/shared/utils/auth/authService';

export const useAuthService = () => {
  const [currentUserType] = useAtom(userType);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken && currentUserType) {
      authorizeAccess(accessToken, refreshToken, currentUserType);
    }
  }, [currentUserType]);
};
