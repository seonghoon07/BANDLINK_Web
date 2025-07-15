import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from '@/features/user/Profile/style.css';
export default function ProfileHeader({ username, email }) {
    return (_jsxs("div", { className: S.profileTextWrapper, children: [_jsxs("p", { className: S.greetText, children: [_jsx("span", { className: S.name, children: username }), "\uB2D8 \uC548\uB155\uD558\uC138\uC694!"] }), _jsx("p", { className: S.email, children: email })] }));
}
