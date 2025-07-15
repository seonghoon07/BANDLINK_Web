import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as S from './style.css';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/layout/NavigationBar';
import Button from '@/components/common/Button';
import RoomItem from '@/components/RoomItem';
import { useMyPlace } from '@/features/spaceOwner/services/spaceOwner.query';
import { getKoreanOffDays } from '@/shared/utils/restDay';
export default function MySpace() {
    const navigate = useNavigate();
    const { data: place } = useMyPlace();
    const offDays = place?.businessDays
        ? getKoreanOffDays(place.businessDays).join(', ')
        : '';
    return (_jsxs("div", { className: S.container, children: [_jsxs("div", { className: S.contentContainer, children: [_jsx("header", { className: S.headerContainer, children: _jsx("p", { className: S.headerText, children: "\uB0B4 \uACF5\uAC04" }) }), place ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: S.spaceInfoWrapper, children: [_jsx("img", { className: S.spaceImg, alt: "\uC7A5\uC18C \uC774\uBBF8\uC9C0", src: place?.imageUrl }), _jsxs("div", { className: S.textInfoWrapper, children: [_jsx("p", { className: S.spaceName, children: place.name }), _jsx("p", { className: S.spaceAddress, children: place.address }), _jsxs("p", { className: S.restDay, children: ["\uB9E4\uC8FC ", _jsx("span", { className: S.redColor, children: offDays }), " \uD734\uBB34"] })] })] }), _jsx("div", { className: S.roomWrapper, children: place?.rooms?.map((room) => (_jsx(RoomItem, { roomname: room.name, price: room.price, description: room.description, imgUrl: room.imageUrl, onClick: () => navigate(`/spaceOwner/space/room/${room.id}`) }))) })] })) : (_jsx("div", { className: S.emptyRoomContainer, children: _jsx("p", { className: S.emptyRoomText, children: "\uB4F1\uB85D\uB41C \uACF5\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }) }))] }), _jsx("div", { className: S.fixBtnContainer, children: _jsx(Button, { type: "button", size: "lg", color: "primary", onClick: () => place
                        ? navigate('/spaceOwner/space/fix')
                        : navigate('/spaceOwner/space/create'), children: place ? '수정하기' : '등록하기' }) }), _jsx(NavigationBar, {})] }));
}
