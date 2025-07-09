import { customAxios } from '@/shared/api';

export const getReserveInfo = async () => {
  const { data } = await customAxios.get('/places/reserveInfo');
  return data;
};

export const getRevenue = async () => {
  const { data } = await customAxios.get('/roomReservation/revenue');
  return data;
};

export const getMyPlace = async () => {
  const { data } = await customAxios.get('/places/my');
  return data;
};
