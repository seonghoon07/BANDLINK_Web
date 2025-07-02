import { customAxios } from '@/shared/api';

export const getPlaces = async () => {
  const { data } = await customAxios.get('/places');
  return data;
};
