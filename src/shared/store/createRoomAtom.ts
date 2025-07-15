import { atom } from 'jotai';

export interface CreateRoom {
  name: string;
  description: string;
  additionalDescription: string;
  price: number;
  image: File;
}

export const createRoomAtom = atom<CreateRoom[]>([]);
