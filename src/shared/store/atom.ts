import { atom } from 'jotai';
import { UserType } from '@/shared/types/userType';

export type DateTimeValue = {
  date: string;
  hour: number;
  minute: string;
};

export const userType = atom<UserType>();

export const rentalStartTimeAtom = atom<DateTimeValue | null>(null);
export const rentalEndTimeAtom = atom<DateTimeValue | null>(null);
