import { atom } from 'jotai';

export interface PlaceFilterState {
  types: string[];
  priceRange: [number, number];
  areas: string[];
}

export const defaultPlaceFilter: PlaceFilterState = {
  types: [],
  priceRange: [0, 250000],
  areas: [],
};

export const placeFilterAtom = atom<PlaceFilterState>(defaultPlaceFilter);
