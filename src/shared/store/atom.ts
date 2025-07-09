import { atom } from 'jotai';
import { RoleType } from '@/shared/types/roleType';
import { atomWithStorage } from 'jotai/utils';

export type DateTimeValue = {
  date: string;
  hour: number;
  minute: string;
};

export const userType = atomWithStorage<RoleType>('userType', 'FAN');

export const rentalStartTimeAtom = atom<DateTimeValue | null>(null);
export const rentalEndTimeAtom = atom<DateTimeValue | null>(null);
