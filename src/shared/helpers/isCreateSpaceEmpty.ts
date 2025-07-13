import { PlaceState } from '@/shared/store/createPlaceAtom';
import { CreateRoomType } from '@/shared/types';

export const isCreateSpaceEmpty = (
  placeState: PlaceState,
  roomList: CreateRoomType[]
): boolean => {
  const isPlaceEmpty =
    placeState.uploadImage === null &&
    placeState.placeName === '' &&
    placeState.postCode === '' &&
    placeState.businessNumber === '' &&
    placeState.address === '' &&
    placeState.detailAddress === '' &&
    placeState.selectedPlaceTypes.length === 0 &&
    placeState.selectedBusinessDays.length === 0 &&
    placeState.selectedTimes.open.hour === '00' &&
    placeState.selectedTimes.open.minute === '00' &&
    placeState.selectedTimes.close.hour === '00' &&
    placeState.selectedTimes.close.minute === '00';

  const isRoomEmpty = roomList.length === 0;

  return isPlaceEmpty && isRoomEmpty;
};
