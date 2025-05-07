import * as S from './style.css';
import theme from '@/shared/styles/theme.css';
import { useLocation } from 'react-router-dom';
import { navItems } from '@/shared/libs/navItems';

export default function NavigationBar() {
  const location = useLocation();
  return (
    <div className={S.navigationLayout}>
      {navItems.map(({ label, icon: Icon, href }) => {
        const isActive = location.pathname.startsWith(href);

        return (
          <button key={href} className={S.navigationBtn}>
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
