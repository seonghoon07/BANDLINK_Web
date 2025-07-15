import * as S from './style.css';
import theme from '@/shared/styles/theme.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '@/shared/libs/navItems';
import { useAtomValue } from 'jotai';
import { userType } from '@/shared/store/atom'; // 경로는 맞게 조정해줘

export default function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentRole = useAtomValue(userType);

  const role =
    currentRole === 'FAN'
      ? 'fan'
      : currentRole === 'BAND'
        ? 'band'
        : 'spaceOwner';

  const items = navItems[role];

  return (
    <div className={S.navigationLayout}>
      {items.map(({ label, icon: Icon, href }) => {
        const isActive = location.pathname.startsWith(href);
        return (
          <button
            key={href}
            className={S.navigationBtn}
            onClick={() => navigate(href)}
          >
            <Icon color={isActive ? theme.yellow['500'] : theme.white} />
            <span
              style={{ color: isActive ? theme.yellow['500'] : theme.white }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
