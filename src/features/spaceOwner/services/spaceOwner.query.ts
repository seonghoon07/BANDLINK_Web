import { useQuery } from '@tanstack/react-query';
import { spaceOwnerKeys } from '@/features/spaceOwner/services/spaceOwner.key';
import {
  getMyPlace,
  getReserveInfo,
  getRevenue,
  getRoomDetail,
} from '@/features/spaceOwner/services/spaceOwner.api';

export const useReserveInfo = () => {
  return useQuery({
    queryKey: [spaceOwnerKeys.reserveInfo],
    queryFn: getReserveInfo,
  });
};

export const useRevenue = () => {
  return useQuery({
    queryKey: [spaceOwnerKeys.revenue],
    queryFn: getRevenue,
  });
};

export const useMyPlace = () => {
  return useQuery({
    queryKey: [spaceOwnerKeys.myPlace],
    queryFn: getMyPlace,
  });
};

export const useRoomDetail = (roomId: string) => {
  return useQuery({
    queryKey: [spaceOwnerKeys.roomDetail],
    queryFn: () => getRoomDetail(roomId),
  });
};
