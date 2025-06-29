import { customAxios } from '@/shared/api';

export const getPerformances = async () => {
  const { data } = await customAxios.get('/performances');
  return data;
};
