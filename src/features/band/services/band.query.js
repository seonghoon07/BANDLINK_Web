import { useQuery } from '@tanstack/react-query';
import { bandKeys } from '@/features/band/services/band.key';
import { getMyPerformances, getPlaceDetails, getPlaces, getRoomDetails, getRoomReservation, getUnavailableDates, getUnavailableHours, } from '@/features/band/services/band.api';
export const usePlaces = () => {
    return useQuery({
        queryKey: [bandKeys.places],
        queryFn: getPlaces,
    });
};
export const usePlaceDetails = (placeId) => {
    return useQuery({
        queryKey: [bandKeys.placeDetail, placeId],
        queryFn: () => getPlaceDetails(placeId),
    });
};
export const useRoomDetails = (roomId) => {
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
export const useUnavailableDates = (reserveInfo) => {
    return useQuery({
        queryKey: [
            bandKeys.unavailableDates,
            reserveInfo.roomId,
            reserveInfo.year,
            reserveInfo.month,
        ],
        queryFn: () => getUnavailableDates(reserveInfo),
        enabled: !!reserveInfo.roomId,
    });
};
export const useUnavailableHours = (timeReserveInfo) => {
    return useQuery({
        queryKey: [
            bandKeys.unavailableHours,
            timeReserveInfo.roomId,
            timeReserveInfo.date,
        ],
        queryFn: () => getUnavailableHours(timeReserveInfo),
        enabled: !!timeReserveInfo.roomId,
    });
};
