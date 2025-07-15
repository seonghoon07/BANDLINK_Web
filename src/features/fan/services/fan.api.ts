import { customAxios } from '@/shared/api';

export const getPerformances = async () => {
  const { data } = await customAxios.get('/performances');
  return data;
};

export const getPerformanceDetail = async (performanceId: number) => {
  const { data } = await customAxios.get(`/performances/${performanceId}`);
  return data;
};

export const postPerformanceReserve = async (performanceId: number) => {
  const { data } = await customAxios.post('/performances/reserve', {
    performanceId,
  });
  return data;
};

export const getReserveHistory = async () => {
  const { data } = await customAxios.get('/performanceReservation');
  return data;
};
