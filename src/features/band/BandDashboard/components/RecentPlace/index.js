import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import PerformanceCard from '@/components/DashboardCard';
import { useNavigate } from 'react-router-dom';
export default function RecentPlace() {
    const navigate = useNavigate();
    const recentPlaces = JSON.parse(localStorage.getItem('recent_places') || '[]');
    return (_jsxs("div", { className: S.upcomingPerformanceContainer, children: [_jsx("p", { className: S.titleText, children: "\uCD5C\uADFC \uBCF8 \uC7A5\uC18C" }), _jsx("div", { className: S.upcomingPerformanceCardWrapper, children: recentPlaces.map((place) => (_jsx(PerformanceCard, { type: "place", image: place.imageUrl, title: place.name, stateText: place.address, onClick: () => navigate(`/band/place/${place.id}`) }, place.id))) })] }));
}
