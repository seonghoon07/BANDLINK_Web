import { useMutation } from '@tanstack/react-query';
import {
  postCreatePerformance,
  postRoomReserve,
} from '@/features/band/services/band.api';

export const useRoomReserveMutation = () => {
  return useMutation({
    mutationFn: postRoomReserve,
  });
};

export const useCreatePerformanceMutation = () => {
  return useMutation({
    mutationFn: postCreatePerformance,
  });
};
