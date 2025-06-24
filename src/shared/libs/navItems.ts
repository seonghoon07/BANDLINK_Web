import {
  HomeIcon,
  PersonIcon,
  SearchIcon,
  TicketIcon,
  PlaceIcon,
  CalendarIcon,
  NoteIcon,
} from '@/assets';

export const navItems = {
  fan: [
    { label: '홈', icon: HomeIcon, href: '/fan/dashboard' },
    { label: '탐색', icon: SearchIcon, href: '/fan/performances' },
    { label: '예매 내역', icon: TicketIcon, href: '/fan/tickets' },
    { label: '마이페이지', icon: PersonIcon, href: '/profile' },
  ],
  band: [
    { label: '홈', icon: HomeIcon, href: '/band/dashboard' },
    { label: '장소', icon: PlaceIcon, href: '/band/place' },
    { label: '공연', icon: NoteIcon, href: '/band/performance' },
    { label: '마이페이지', icon: PersonIcon, href: '/profile' },
  ],
  spaceOwner: [
    { label: '홈', icon: HomeIcon, href: '/spaceOwner/dashboard' },
    { label: '공간', icon: PlaceIcon, href: '/spaceOwner/space' },
    { label: '예약 관리', icon: CalendarIcon, href: '/spaceOwner/reservations' },
    { label: '마이페이지', icon: PersonIcon, href: '/profile' },
  ],
} as const;
