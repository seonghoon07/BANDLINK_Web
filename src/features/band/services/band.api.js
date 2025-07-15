import { customAxios } from '@/shared/api';
export const getPlaces = async () => {
    const { data } = await customAxios.get('/places');
    return data;
};
export const getPlaceDetails = async (placeId) => {
    const { data } = await customAxios.get(`/places/${placeId}`);
    return data;
};
export const getRoomDetails = async (roomId) => {
    const { data } = await customAxios.get(`/rooms/${roomId}`);
    return data;
};
export const getRoomReservation = async () => {
    const { data } = await customAxios.get('/roomReservation');
    return data;
};
export const postRoomReserve = async ({ roomId, body }) => {
    const { data } = await customAxios.post(`/rooms/${roomId}/reserve`, body);
    return data;
};
export const getMyPerformances = async () => {
    const { data } = await customAxios.get('/performances/my');
    return data;
};
export const postCreatePerformance = async (createPerforamnceBody) => {
    const { data } = await customAxios.post('/performances', createPerforamnceBody, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return data;
};
export const getUnavailableDates = async (reserveInfo) => {
    const { data } = await customAxios.get(`/rooms/${reserveInfo.roomId}/unavailableDates?year=${reserveInfo.year}&month=${reserveInfo.month}`);
    return data;
};
export const getUnavailableHours = async (timeReserveInfo) => {
    const { data } = await customAxios.get(`/rooms/${timeReserveInfo.roomId}/unavailableHours?date=${timeReserveInfo.date}`);
    return data;
};
