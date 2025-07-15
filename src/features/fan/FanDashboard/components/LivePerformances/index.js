import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import LivePerformanceCard from '@/components/DashboardCard';
import { usePerformances } from '@/features/fan/services/fan.query';
export default function LivePerformances() {
    const { data: performances } = usePerformances();
    return (_jsxs("div", { className: S.livePerformanceContainer, children: [_jsx("p", { className: S.titleText, children: "\uC2E4\uC2DC\uAC04 \uC778\uAE30 \uACF5\uC5F0" }), _jsx("div", { className: S.livePerformanceCardWrapper, children: performances?.map((i) => {
                    return (_jsx(LivePerformanceCard, { type: 'live', image: i.posterUrl, title: i.title, stateText: '800' }, i.id));
                }) })] }));
}
