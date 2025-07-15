import { atom } from 'jotai';
export const initialPlaceState = {
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
};
export const createPlaceAtom = atom(initialPlaceState);
