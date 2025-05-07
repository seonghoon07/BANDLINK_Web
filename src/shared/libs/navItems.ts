import { HomeIcon, PersonIcon, SearchIcon, TicketIcon } from '@/assets';

export const navItems = [
  {
    label: '홈',
    icon: HomeIcon,
    href: '/fan/dashboard',
  },
  {
    label: '탐색',
    icon: SearchIcon,
    href: '/fan/search',
  },
  {
    label: '예매 내역',
    icon: TicketIcon,
    href: '/fan/tickets',
  },
  {
    label: '마이페이지',
    icon: PersonIcon,
    href: '/fan/profile',
  },
];
