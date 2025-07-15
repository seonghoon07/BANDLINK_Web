import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
export default function UserRole({ role, roleInfo, Icon, onClick }) {
    return (_jsxs("div", { className: S.layout, onClick: onClick, children: [_jsx(Icon, { width: "40px", height: "40px" }), _jsxs("div", { className: S.textWrapper, children: [_jsx("p", { className: S.role, children: role }), _jsx("p", { className: S.roleInfo, children: roleInfo })] })] }));
}
