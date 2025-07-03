import { useMutation } from '@tanstack/react-query';
import { postRoomReserve } from '@/features/band/services/band.api';

export const useRoomReserveMutation = () => {
  return useMutation({
    mutationFn: postRoomReserve,
  });
};
