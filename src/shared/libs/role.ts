import Person from '@/assets/icons/person.svg?react';
import Place from '@/assets/icons/place.svg?react';
import Note from '@/assets/icons/note.svg?react';

export const role = [
  {
    id: 1,
    role: '팬',
    roleInfo: '좋아하는 밴드의 공연을 찾아보세요',
    Icon: Person,
  },
  {
    id: 2,
    role: '밴드',
    roleInfo: '장소를 대여하고 나만에 공연을 열어봐요',
    Icon: Note,
  },
  {
    id: 3,
    role: '장소 대여주',
    roleInfo: '밴드에게 장소를 대여해줘요',
    Icon: Place,
  },
];
