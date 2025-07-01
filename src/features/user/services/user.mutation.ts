import { useMutation } from '@tanstack/react-query';
import { patchUserRole, postRegister } from '@/features/user/services/user.api';

export const useRegisterUserMutation = () => {
  return useMutation({
    mutationFn: postRegister,
  });
};

export const useUpdateUserRoleMutation = () => {
  return useMutation({
    mutationFn: patchUserRole,
  });
};
