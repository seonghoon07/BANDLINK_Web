import { customAxios } from '@/shared/api';

export const getReserveInfo = async () => {
  const { data } = await customAxios.get('/places/reserveInfo');
  return data;
};
