import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import MyPerformanceCard from './components/myPerformanceCard';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useMyPerformances } from '@/features/band/services/band.query';
import { formatKoreanDatetime } from '@/shared/utils/date';
export default function MyPerformance() {
    const navigate = useNavigate();
    const { data: myPerformances } = useMyPerformances();
    return (_jsxs("div", { className: S.myPerformanceContainer, children: [_jsx("header", { className: S.titleHeader, children: "\uB0B4 \uACF5\uC5F0" }), _jsx("div", { className: S.myPerformnaces, children: myPerformances?.map((performance) => (_jsx(MyPerformanceCard, { imageSrc: performance.posterUrl, name: performance.title, startTime: formatKoreanDatetime(performance.start_time), location: performance.address, price: performance.price }, performance.id))) }), _jsx("div", { className: S.createBtnWrapper, children: _jsx(Button, { size: "lg", type: "button", color: "primary", onClick: () => navigate('/band/performance/create'), children: "\uACF5\uC5F0 \uC0DD\uC131" }) }), _jsx(NavigationBar, {})] }));
}
