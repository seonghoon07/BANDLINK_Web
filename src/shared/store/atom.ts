import { atom } from 'jotai';

export const userType = atom<'user' | 'band'>('user');
