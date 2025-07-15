import { useMutation } from '@tanstack/react-query';
import { deleteLogout, deleteUser, patchUserRole, postRegister } from '@/features/user/services/user.api';

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

export const useLogoutUserMutation = () => {
  return useMutation({
    mutationFn: deleteLogout,
  });
};

export const useDeleteUserMutation = () => {
  return useMutation({
    mutationFn: deleteUser,
  });
};
