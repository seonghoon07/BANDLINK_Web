import * as S from './style.css';
import theme from '@/shared/styles/theme.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '@/shared/libs/navItems';

const getRoleFromPath = (pathname: string): keyof typeof navItems => {
  if (pathname.startsWith('/band')) return 'band';
  if (pathname.startsWith('/host')) return 'host';
  return 'fan';
};

export default function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const role = getRoleFromPath(location.pathname);
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
