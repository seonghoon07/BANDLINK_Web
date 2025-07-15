import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import Header from '@/components/layout/Header';
import NavigationBar from '@/components/layout/NavigationBar';
import Notification from '@/features/band/BandDashboard/components/Notification';
import RecommendPlace from '@/features/band/BandDashboard/components/RecommendPlace';
import RecentPlace from '@/features/band/BandDashboard/components/RecentPlace';
export default function BandDashboard() {
    return (_jsxs("div", { className: S.layout, children: [_jsx(Header, {}), _jsxs("div", { className: S.contentLayout, children: [_jsx(Notification, {}), _jsx(RecommendPlace, {}), _jsx(RecentPlace, {})] }), _jsx(NavigationBar, {})] }));
}
