import { atom } from 'jotai';
import { RoleType } from '@/shared/types/roleType';

export type DateTimeValue = {
  date: string;
  hour: number;
  minute: string;
};

export const userType = atom<RoleType>('FAN');

export const rentalStartTimeAtom = atom<DateTimeValue | null>(null);
export const rentalEndTimeAtom = atom<DateTimeValue | null>(null);
