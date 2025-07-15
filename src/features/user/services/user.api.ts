import { customAxios } from '@/shared/api';
import { UserData } from '@/shared/types/userData';

export const postRegister = async (userData: UserData) => {
  const { data } = await customAxios.post('/auth/register', userData);
  return data;
};

export const getUser = async () => {
  const { data } = await customAxios.get('/users');
  return data;
};

export const patchUserRole = async (userRoleBody: {
  role: string;
  bandname?: string;
}) => {
  const { data } = await customAxios.patch('/users/role', userRoleBody);
  return data;
};

export const deleteLogout = async () => {
  const { data } = await customAxios.delete('/auth');
  return data;
};

export const deleteUser = async () => {
  const { data } = await customAxios.delete('/auth/delete ');
  return data;
};
