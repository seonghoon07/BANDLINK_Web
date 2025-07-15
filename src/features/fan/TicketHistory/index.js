import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import TicketItem from '@/components/TicketItem';
import NavigationBar from '@/components/layout/NavigationBar';
import { useReserveHistory } from '@/features/fan/services/fan.query';
export default function TicketHistory() {
    const { data: reserveHistory } = useReserveHistory();
    return (_jsxs("div", { className: S.container, children: [_jsxs("div", { className: S.contentContainer, children: [_jsx("header", { className: S.headerContainer, children: _jsx("p", { className: S.headerTitle, children: "\uD2F0\uCF13 \uC608\uB9E4 \uB0B4\uC5ED" }) }), _jsx("div", { className: S.ticketListContainer, children: reserveHistory?.map((reserve) => (_jsx(TicketItem, { title: reserve.title, place: reserve.place, reservedAt: reserve.reservedAt, price: reserve.price, posterUrl: reserve.posterUrl, status: "\uC608\uB9E4\uC644\uB8CC" }, reserve.id))) })] }), _jsx(NavigationBar, {})] }));
}
