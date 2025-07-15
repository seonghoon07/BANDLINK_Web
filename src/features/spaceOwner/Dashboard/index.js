import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import Header from '@/components/layout/Header';
import { useMyPlace, useReserveInfo, useRevenue, } from '@/features/spaceOwner/services/spaceOwner.query';
export default function Dashboard() {
    const { data: reservationInfo } = useReserveInfo();
    const { data: revenue } = useRevenue();
    const { data: place } = useMyPlace();
    const formatToAmPmHour = (isoString) => {
        const date = new Date(isoString);
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const period = hours < 12 ? '오전' : '오후';
        const hour = hours % 12 === 0 ? 12 : hours % 12;
        const paddedMinutes = String(minutes).padStart(2, '0');
        return `${period} ${hour}시 ${paddedMinutes}분`;
    };
    const formatRawTimeToAmPm = (time) => {
        const [hourStr, minuteStr] = time.split(':');
        const hour = parseInt(hourStr, 10);
        const minute = parseInt(minuteStr, 10);
        const period = hour < 12 ? '오전' : '오후';
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        const paddedMinute = String(minute).padStart(2, '0');
        return `${period} ${formattedHour}시 ${paddedMinute}분`;
    };
    const difference = revenue !== undefined
        ? revenue.currentRevenue - revenue.lastMonthRevenue
        : undefined;
    const diffClassName = difference === undefined
        ? S.yellowColor
        : difference > 0
            ? S.redColor
            : difference < 0
                ? S.blueColor
                : S.yellowColor;
    const diffText = difference === undefined
        ? '-'
        : `${difference > 0 ? '+' : ''}${difference.toLocaleString()}원`;
    return (_jsxs("div", { className: S.container, children: [_jsx(Header, {}), _jsxs("div", { className: S.contentContainer, children: [_jsxs("div", { className: S.todayReservationContainer, children: [_jsxs("p", { className: S.todayReservation, children: ["\uC624\uB298\uC740 ", reservationInfo?.count ?? 0, "\uAC74\uC758 \uC608\uC57D\uC774 \uC788\uC2B5\uB2C8\uB2E4."] }), _jsxs("div", { className: S.reservationTimeContainer, children: [_jsxs("div", { className: S.reservationTimeWrapper, children: [_jsx("p", { className: S.timeLabel, children: "\uCCAB \uC785\uC2E4 \uC2DC\uAC04" }), _jsx("p", { className: S.timeValue, children: reservationInfo?.firstEnterTime
                                                    ? formatToAmPmHour(reservationInfo.firstEnterTime)
                                                    : reservationInfo === undefined
                                                        ? '로딩 중...'
                                                        : '예정된 예약 없음' })] }), _jsxs("div", { className: S.reservationTimeWrapper, children: [_jsx("p", { className: S.timeLabel, children: "\uB9C8\uC9C0\uB9C9 \uD1F4\uC2E4 \uC2DC\uAC04" }), _jsx("p", { className: S.timeValue, children: reservationInfo?.lastLeaveTime
                                                    ? formatToAmPmHour(reservationInfo.lastLeaveTime)
                                                    : reservationInfo === undefined
                                                        ? '로딩 중...'
                                                        : '예정된 예약 없음' })] })] })] }), _jsxs("div", { className: S.revenueBox, children: [_jsxs("div", { className: S.monthRevenueWrapper, children: [_jsx("p", { className: S.categoryLabel, children: "\uC774\uBC88 \uB2EC \uB204\uC801 \uC218\uC775" }), _jsx("p", { className: S.categoryValue, children: revenue ? `${revenue.currentRevenue.toLocaleString()}원` : '-' })] }), _jsxs("div", { className: S.monthRevenueWrapper, children: [_jsx("p", { className: S.categoryLabel, children: "\uC9C0\uB09C \uB2EC \uB300\uBE44" }), _jsx("p", { className: S.categoryValue, children: _jsx("span", { className: diffClassName, children: diffText }) })] })] }), _jsxs("div", { className: S.mySpaceContainer, children: [_jsx("p", { className: S.mySpaceTitle, children: "\uB0B4 \uACF5\uAC04" }), place === undefined ? (_jsx("div", { className: S.emptySpaceWrapper, children: _jsx("p", { className: S.emptyText, children: "\uC7A5\uC18C\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4..." }) })) : place === null ? (_jsx("div", { className: S.emptySpaceWrapper, children: _jsx("p", { className: S.emptyText, children: "\uB4F1\uB85D\uB41C \uC7A5\uC18C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4!" }) })) : (_jsxs("div", { className: S.mySpaceWrapper, children: [_jsx("img", { className: S.spaceImage, alt: "\uC7A5\uC18C \uC774\uBBF8\uC9C0", src: place.imageUrl }), _jsxs("div", { className: S.spaceInfoWrapper, children: [_jsx("p", { className: S.placeName, children: place.name }), _jsx("p", { className: S.placeAddress, children: place.address }), _jsxs("p", { className: S.businessHours, children: [formatRawTimeToAmPm(place.openTime), " ~", ' ', formatRawTimeToAmPm(place.closeTime)] })] })] }))] })] }), _jsx(NavigationBar, {})] }));
}
