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
  if (data === '') return null;
  return data;
};

export const getRoomDetail = async (roomId: string) => {
  const { data } = await customAxios.get(`/rooms/${roomId}`);
  return data;
};

export const postCreatePlace = async (placeBody: FormData) => {
  const { data } = await customAxios.post('/places', placeBody);
  return data;
};
