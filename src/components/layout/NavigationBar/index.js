import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const role = currentRole === 'FAN'
        ? 'fan'
        : currentRole === 'BAND'
            ? 'band'
            : 'spaceOwner';
    const items = navItems[role];
    return (_jsx("div", { className: S.navigationLayout, children: items.map(({ label, icon: Icon, href }) => {
            const isActive = location.pathname.startsWith(href);
            return (_jsxs("button", { className: S.navigationBtn, onClick: () => navigate(href), children: [_jsx(Icon, { color: isActive ? theme.yellow['500'] : theme.white }), _jsx("span", { style: { color: isActive ? theme.yellow['500'] : theme.white }, children: label })] }, href));
        }) }));
}
