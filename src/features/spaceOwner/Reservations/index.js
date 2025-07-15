import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { useMyRoomReservation } from '@/features/spaceOwner/services/spaceOwner.query';
import { formatDateToKorean } from '@/shared/utils/formatDateToKorean';
export default function Reservations() {
    const { data: reservations } = useMyRoomReservation();
    return (_jsxs("div", { className: S.container, children: [_jsx("header", { className: S.header, children: _jsx("p", { className: S.headerText, children: "\uC608\uC57D \uB9AC\uC2A4\uD2B8" }) }), _jsx("div", { className: S.reservationsContainer, children: reservations?.map((daily) => {
                    return (_jsxs("div", { className: S.dayReservationContainer, children: [_jsx("p", { className: S.date, children: formatDateToKorean(daily.date) }), daily?.reservations?.map((item) => {
                                return (_jsxs("div", { className: S.reservationInfoWrapper, children: [_jsx("p", { className: S.reservationInfo, children: item.roomName }), _jsxs("p", { className: S.reservationInfo, children: [item.startTime, " ~ ", item.endTime] }), _jsx("p", { className: S.reservationInfo, children: item.userName }), _jsxs("p", { className: S.reservationInfo, children: [item.price.toLocaleString(), "\uC6D0"] })] }));
                            })] }));
                }) }), _jsx(NavigationBar, {})] }));
}
