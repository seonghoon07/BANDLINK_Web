import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate, useParams } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import TimeSlot from '@/features/band/RoomReservation/components/TimeSlot';
import Button from '@/components/common/Button';
import { useRoomDetails, useUnavailableDates, useUnavailableHours, } from '@/features/band/services/band.query';
import { useState } from 'react';
import { useRoomReserveMutation } from '@/features/band/services/band.mutation';
export default function RoomReservation() {
    const today = new Date().toISOString().split('T')[0];
    const { roomId } = useParams();
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedRange, setSelectedRange] = useState(null);
    const [dateInfo, setDateInfo] = useState({
        roomId: Number(roomId),
        year: today.split('-')[0],
        month: today.split('-')[1],
    });
    const timeReserveInfo = {
        roomId: Number(roomId),
        date: selectedDate,
    };
    const { data: roomDetails } = useRoomDetails(roomId);
    const { mutate: roomReserveMutate } = useRoomReserveMutation();
    const { data: unavailableDates = [] } = useUnavailableDates(dateInfo);
    const { data: unavailableHours = [] } = useUnavailableHours(timeReserveInfo);
    const buildRoomReserveBody = (date, range, unitPrice) => {
        if (!range)
            return null;
        const [start, end] = range;
        const pad = (n) => String(n).padStart(2, '0');
        const startDateTime = `${date}T${pad(start)}:00:00+09:00`;
        const endDateTime = `${date}T${pad(end)}:59:59+09:00`;
        const hourCount = end - start + 1;
        const totalPrice = unitPrice * hourCount;
        return {
            startDate: startDateTime,
            endDate: endDateTime,
            price: totalPrice,
        };
    };
    const onReserveBtnClick = () => {
        const roomReserveBody = buildRoomReserveBody(selectedDate, selectedRange, roomDetails.price);
        if (!selectedRange) {
            alert('예약 시간을 선택해주세요.');
            return;
        }
        if (!roomId) {
            alert('유효하지 않은 방입니다.');
            return;
        }
        const isReserve = confirm('정말로 예약하시겠습니까?');
        if (isReserve) {
            roomReserveMutate({ roomId, body: roomReserveBody }, {
                onSuccess: () => {
                    alert('성공적으로 예약되었습니다.');
                    navigate(-1);
                },
            });
        }
    };
    return (_jsxs("div", { className: S.roomResevationContainer, children: [_jsx("header", { className: S.roomReservationHeader, children: _jsx(ArrowIcon, { onClick: () => navigate(-1) }) }), _jsx("div", { className: S.contentContainer, children: roomDetails && (_jsxs(_Fragment, { children: [_jsx("img", { className: S.roomImg, src: roomDetails.imageUrl }), _jsxs("div", { className: S.roomInfoWrapper, children: [_jsx("p", { className: S.roomName, children: roomDetails.name }), _jsx("p", { className: S.description, children: roomDetails.description }), _jsxs("p", { className: S.price, children: [roomDetails.price.toLocaleString(), _jsx("span", { className: S.thinText, children: "\uC6D0 / \uC2DC\uAC04" })] })] }), _jsx("div", { className: S.deviderLine }), _jsx("div", { children: _jsx(Calendar, { selectedDate: selectedDate, setSelectedDate: setSelectedDate, unavailableDates: unavailableDates || [], setDateInfo: setDateInfo }) }), _jsx("div", { className: S.deviderLine }), _jsx(TimeSlot, { selectedRange: selectedRange, setSelectedRange: setSelectedRange, unavailableHours: unavailableHours || [] }), _jsx("div", { className: S.deviderLine }), _jsxs("div", { className: S.subDescriptionContainer, children: [_jsx("p", { className: S.subDescriptionTitle, children: "\uBD80\uAC00\uC124\uBA85" }), _jsx("div", { className: S.subDescription, children: roomDetails.additionDescription })] }), _jsx("div", { className: S.deviderLine }), _jsx(Button, { size: "lg", type: "submit", color: "primary", onClick: onReserveBtnClick, children: "\uC608\uB9E4\uD558\uAE30" })] })) }), _jsx(NavigationBar, {})] }));
}
