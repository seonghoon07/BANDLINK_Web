import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import PerformanceCard from '@/components/DashboardCard';
import { usePerformances } from '@/features/fan/services/fan.query';
export default function UpcomingPerformances() {
    const { data: performances } = usePerformances();
    const now = new Date();
    const getDaysUntil = (dateString) => {
        const target = new Date(dateString);
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const targetDay = new Date(target.getFullYear(), target.getMonth(), target.getDate());
        const diffMs = targetDay.getTime() - today.getTime();
        return diffMs / (1000 * 60 * 60 * 24);
    };
    const upcomingPerformances = performances?.filter((performance) => {
        const daysUntil = getDaysUntil(performance.startTime);
        return daysUntil >= 0 && daysUntil <= 3;
    });
    return (_jsxs("div", { className: S.upcomingPerformanceContainer, children: [_jsx("p", { className: S.titleText, children: "\uACE7 \uC5F4\uB9AC\uB294 \uACF5\uC5F0" }), _jsx("div", { className: S.upcomingPerformanceCardWrapper, children: upcomingPerformances?.map((performance) => (_jsx(PerformanceCard, { type: "upcoming", image: performance.posterUrl, title: performance.title, stateText: `${getDaysUntil(performance.startTime)}` }, performance.id))) })] }));
}
