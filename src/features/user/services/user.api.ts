import { customAxios } from '@/shared/api';
import { UserData } from '@/shared/types/userData';

export const postRegister = async (userData: UserData) => {
  const { data } = await customAxios.post('/auth/register', userData);
  return data;
};
