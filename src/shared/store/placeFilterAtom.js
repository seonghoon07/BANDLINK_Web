import { atom } from 'jotai';
export const defaultPlaceFilter = {
    types: [],
    priceRange: [0, 250000],
    areas: [],
};
export const placeFilterAtom = atom(defaultPlaceFilter);
