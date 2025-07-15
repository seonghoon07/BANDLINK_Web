import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import { GoogleIcon, LogoIcon, TextLogoIcon } from '@/assets';
export default function Start() {
    const locateOauth = () => {
        window.location.href = import.meta.env.VITE_OAUTH_URL;
    };
    return (_jsx("div", { className: S.layout, children: _jsxs("div", { className: S.contentWrapper, children: [_jsxs("div", { className: S.logoLayout, children: [_jsx(LogoIcon, { width: 240, height: 240 }), _jsx(TextLogoIcon, {})] }), _jsxs("div", { className: S.googleLoginBtn, onClick: locateOauth, children: [_jsx(GoogleIcon, {}), _jsx("p", { className: S.googleLoginText, children: "\uAD6C\uAE00 \uB85C\uADF8\uC778" })] })] }) }));
}
