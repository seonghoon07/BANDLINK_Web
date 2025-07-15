import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import Header from '@/components/layout/Header';
import Notification from './components/Notification';
import LivePerformances from './components/LivePerformances';
import UpcomingPerformances from './components/UpcomingPerformances';
import NavigationBar from '@/components/layout/NavigationBar';
export default function FanDashboard() {
    return (_jsxs("div", { className: S.layout, children: [_jsx(Header, {}), _jsxs("div", { className: S.contentLayout, children: [_jsx(Notification, {}), _jsx(LivePerformances, {}), _jsx(UpcomingPerformances, {})] }), _jsx(NavigationBar, {})] }));
}
