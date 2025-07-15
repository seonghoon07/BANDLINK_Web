import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import LivePerformanceCard from '@/components/DashboardCard';
import { usePlaces } from '@/features/band/services/band.query';
import { useNavigate } from 'react-router-dom';
export default function RecommendPlace() {
    const { data: places } = usePlaces();
    const navigate = useNavigate();
    return (_jsxs("div", { className: S.livePerformanceContainer, children: [_jsx("p", { className: S.titleText, children: "\uCD94\uCC9C \uB300\uAD00 \uC7A5\uC18C" }), _jsx("div", { className: S.livePerformanceCardWrapper, children: places?.map((place) => {
                    if (place.isRecommended) {
                        return (_jsx(LivePerformanceCard, { type: "place", image: place.imageUrl, title: place.name, stateText: place.address, onClick: () => navigate(`/band/place/${place.id}`) }, place.id));
                    }
                }) })] }));
}
