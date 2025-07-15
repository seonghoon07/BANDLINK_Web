import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import { LogoIcon } from '@/assets';
export default function Header() {
    return (_jsx("div", { className: S.headerLayout, children: _jsxs("div", { className: S.logoLayout, children: [_jsx(LogoIcon, { width: 38, height: 38 }), _jsx("p", { className: S.textLogo, children: "BANDLINK" })] }) }));
}
