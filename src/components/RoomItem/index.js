import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
export default function RoomItem({ roomname, price, description, imgUrl, onClick, }) {
    return (_jsxs("div", { className: S.roomContainer, onClick: onClick, children: [_jsxs("div", { className: S.roomInfoWrapper, children: [_jsx("p", { className: S.roomname, children: roomname }), _jsxs("p", { className: S.price, children: [_jsx("span", { className: S.priceBold, children: price.toLocaleString() }), "\uC6D0"] }), _jsx("p", { className: S.roomDescription, children: description })] }), _jsx("img", { className: S.roomImg, src: imgUrl })] }));
}
