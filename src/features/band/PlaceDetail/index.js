import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate, useParams } from 'react-router-dom';
import RoomItem from '@/components/RoomItem';
import { usePlaceDetails } from '@/features/band/services/band.query';
import { useEffect } from 'react';
import { saveRecentPlaces } from '@/shared/utils/saveRecentPlace';
export default function PlaceDetail() {
    const navigate = useNavigate();
    const { placeId } = useParams();
    const { data: placeDetails } = usePlaceDetails(placeId);
    useEffect(() => {
        if (placeDetails) {
            saveRecentPlaces({
                id: placeDetails.id,
                name: placeDetails.name,
                address: placeDetails.address,
                imageUrl: placeDetails.imageUrl,
            });
        }
    }, [placeDetails]);
    return (_jsxs("div", { className: S.placeDetailContainer, children: [_jsx("header", { className: S.placeDetailHeader, children: _jsx(ArrowIcon, { onClick: () => navigate(-1) }) }), _jsx("div", { className: S.placeDetailContent, children: placeDetails && (_jsxs(_Fragment, { children: [_jsx("img", { className: S.placeImage, src: placeDetails.imageUrl, alt: "\uC7A5\uC18C \uC774\uBBF8\uC9C0" }), _jsxs("div", { className: S.placeInfo, children: [_jsx("p", { className: S.placename, children: placeDetails.name }), _jsx("p", { className: S.address, children: placeDetails.address })] }), _jsx("div", { className: S.roomList, children: placeDetails.rooms.map((room) => (_jsx(RoomItem, { roomname: room.name, price: room.price, description: room.description, imgUrl: room.imageUrl, onClick: () => navigate(`/band/place/${placeDetails.id}/room/${room.id}/reserve`) }, room.id))) })] })) }), _jsx(NavigationBar, {})] }));
}
