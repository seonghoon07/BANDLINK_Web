import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
export default function PerformanceItem({ image, title, artist, price, onClick, }) {
    return (_jsxs("div", { className: S.performanceItemContainer, onClick: onClick, children: [_jsx("div", { className: S.performanceImgWrapper, children: _jsx("img", { className: S.performanceImg, alt: "\uC568\uBC94 \uC0AC\uC9C4", src: image }) }), _jsxs("div", { className: S.textWrapper, children: [_jsx("p", { className: S.title, children: title }), _jsx("p", { className: S.artist, children: artist })] }), _jsxs("p", { className: S.price, children: [price.toLocaleString(), "\uC6D0"] })] }));
}
