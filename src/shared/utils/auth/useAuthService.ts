import { useEffect } from 'react';
import { authorizeAccess } from '@/shared/utils/auth/authService';

export const useAuthService = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      authorizeAccess(accessToken, refreshToken);
    }
  }, []);
};
