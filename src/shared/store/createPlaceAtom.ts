import { atom } from 'jotai';

export interface SelectedTimeType {
  hour: string;
  minute: string;
}

export interface PlaceState {
  uploadImage: File | null;
  isUpload: boolean;
  selectedPlaceTypes: string[];
  selectedBusinessDays: string[];
  placeName: string;
  postCode: string;
  businessNumber: string;
  address: string;
  detailAddress: string;
  isFindAddressClick: boolean;
  selectedTimes: {
    open: SelectedTimeType;
    close: SelectedTimeType;
  };
}

export const createPlaceAtom = atom<PlaceState>({
  uploadImage: null,
  isUpload: false,
  selectedPlaceTypes: [],
  selectedBusinessDays: [],
  placeName: '',
  postCode: '',
  businessNumber: '',
  address: '',
  detailAddress: '',
  isFindAddressClick: false,
  selectedTimes: {
    open: { hour: '00', minute: '00' },
    close: { hour: '00', minute: '00' },
  },
});
