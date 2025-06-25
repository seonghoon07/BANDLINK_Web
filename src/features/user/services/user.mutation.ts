import { useMutation } from '@tanstack/react-query';
import { postRegister } from '@/features/user/services/user.api';

export const useRegisterUserMutation = () => {
  return useMutation({
    mutationFn: postRegister,
  });
};
