import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from '@/features/user/Profile/style.css';
const userTypeMap = {
    FAN: '팬',
    BAND: '밴드',
    PLACE_OWNER: '장소대여주',
};
export default function InfoSummaryCard({ type, point, coupon, }) {
    return (_jsxs("div", { className: S.infoSummaryCard, children: [_jsxs("div", { className: S.infoSummaryItem, children: [_jsx("p", { className: S.summaryLable, children: "\uC720\uD615" }), _jsx("p", { className: S.summaryText, children: userTypeMap[type] })] }), _jsxs("div", { className: S.infoSummaryItem, children: [_jsx("p", { className: S.summaryLable, children: "\uD3EC\uC778\uD2B8" }), _jsx("p", { className: S.summaryText, children: point.toLocaleString() })] }), _jsxs("div", { className: S.infoSummaryItem, children: [_jsx("p", { className: S.summaryLable, children: "\uCFE0\uD3F0" }), _jsx("p", { className: S.summaryText, children: coupon.toLocaleString() })] })] }));
}
