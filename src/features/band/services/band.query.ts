import { useQuery } from '@tanstack/react-query';
import { bandKeys } from '@/features/band/services/band.key';
import {
  getMyPerformances,
  getPlaceDetails,
  getPlaces,
  getRoomDetails, getRoomReservation,
} from '@/features/band/services/band.api';

export const usePlaces = () => {
  return useQuery({
    queryKey: [bandKeys.places],
    queryFn: getPlaces,
  });
};

export const usePlaceDetails = (placeId: string) => {
  return useQuery({
    queryKey: [bandKeys.placeDetail, placeId],
    queryFn: () => getPlaceDetails(placeId),
  });
};

export const useRoomDetails = (roomId: string) => {
  return useQuery({
    queryKey: [bandKeys.roomDetail, roomId],
    queryFn: () => getRoomDetails(roomId),
  });
};

export const useMyPerformances = () => {
  return useQuery({
    queryKey: [bandKeys.myPerformances],
    queryFn: getMyPerformances,
  });
};

export const useRoomReservation = () => {
  return useQuery({
    queryKey: [bandKeys.roomReservation],
    queryFn: getRoomReservation,
  });
};
