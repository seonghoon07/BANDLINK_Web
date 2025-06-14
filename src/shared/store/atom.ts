import { atom } from 'jotai';

export type DateTimeValue = {
  date: string;
  hour: number;
  minute: string;
};

export const userType = atom<'user' | 'band'>('user');

export const rentalStartTimeAtom = atom<DateTimeValue | null>(null);
export const rentalEndTimeAtom = atom<DateTimeValue | null>(null);
