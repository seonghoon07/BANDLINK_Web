import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
export default function PlaceItem({ imageUrl, placename, address, type, onClick, }) {
    return (_jsxs("div", { className: S.placeContainer, onClick: onClick, children: [_jsx("img", { className: S.placeImg, src: imageUrl, alt: "\uC7A5\uC18C \uC774\uBBF8\uC9C0" }), _jsxs("div", { className: S.textContainer, children: [_jsx("p", { className: S.placename, children: placename }), _jsx("p", { className: S.infoText, children: address }), _jsx("p", { className: S.infoText, children: type })] })] }));
}
