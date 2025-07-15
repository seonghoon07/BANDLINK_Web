import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
export const userType = atomWithStorage('userType', null);
export const rentalStartTimeAtom = atom(null);
export const rentalEndTimeAtom = atom(null);
