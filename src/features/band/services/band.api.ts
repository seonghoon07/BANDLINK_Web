import { customAxios } from '@/shared/api';

type RoomReserveParams = {
  roomId: string;
  body: any;
};

export const getPlaces = async () => {
  const { data } = await customAxios.get('/places');
  return data;
};

export const getPlaceDetails = async (placeId: string) => {
  const { data } = await customAxios.get(`/places/${placeId}`);
  return data;
};

export const getRoomDetails = async (roomId: string) => {
  const { data } = await customAxios.get(`/rooms/${roomId}`);
  return data;
};

export const postRoomReserve = async ({ roomId, body }: RoomReserveParams) => {
  const { data } = await customAxios.post(`/rooms/${roomId}/reserve`, body);
  return data;
};
