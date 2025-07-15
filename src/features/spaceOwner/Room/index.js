import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate, useParams } from 'react-router-dom';
import { useRoomDetail } from '@/features/spaceOwner/services/spaceOwner.query';
import { getKoreanOffDays } from '@/shared/utils/restDay';
export default function Room() {
    const navigate = useNavigate();
    const { roomId } = useParams();
    const { data: room } = useRoomDetail(roomId);
    const offDays = room?.businessDays
        ? getKoreanOffDays(room.businessDays).join(', ')
        : '';
    return (_jsxs("div", { className: S.container, children: [_jsxs("div", { className: S.contentContainer, children: [_jsx("header", { className: S.header, children: _jsx(ArrowIcon, { onClick: () => navigate(-1) }) }), _jsxs("div", { className: S.roomInfoContainer, children: [_jsx("img", { className: S.rooomImage, src: room?.imageUrl, alt: "\uBC29 \uC774\uBBF8\uC9C0" }), _jsxs("div", { className: S.mainInfoWrapper, children: [_jsx("p", { className: S.roomName, children: room?.name }), _jsx("p", { className: S.roomDescription, children: room?.description }), _jsxs("p", { className: S.roomPrice, children: [room?.price.toLocaleString(), ' ', _jsx("span", { className: S.lightText, children: "/ \uC2DC\uAC04" })] })] }), _jsx("div", { className: S.dividerLine }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uD734\uBB34\uC77C" }), _jsxs("p", { className: S.restDay, children: ["\uB9E4\uC8FC ", _jsx("span", { className: S.redColor, children: offDays }), " \uC81C\uC678 24\uC2DC\uAC04 \uC601\uC5C5"] })] }), _jsx("div", { className: S.dividerLine }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uBD80\uAC00 \uC124\uBA85" }), _jsx("div", { className: S.additionalDescriptionBox, children: _jsx("p", { className: S.additionalDescription, children: room?.additionDescription }) })] })] })] }), _jsx(NavigationBar, {})] }));
}
