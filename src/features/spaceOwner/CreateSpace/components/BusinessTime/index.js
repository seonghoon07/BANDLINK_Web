import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import BusinessTimePicker from '@/features/spaceOwner/CreateSpace/components/BusinessTimePicker';
import { ArrowCenterIcon } from '@/assets';
import { useState } from 'react';
export default function BusinessTime({ selectedTimes, setSelectedTimes, }) {
    const [isTimeClick, setIsTimeClick] = useState({ open: false, close: false });
    const toggleTimeClick = (type) => {
        setIsTimeClick((prev) => ({ ...prev, [type]: !prev[type] }));
    };
    const renderTimePicker = (type) => (_jsx(BusinessTimePicker, { onTimeChange: (hour, minute) => handleTimeChange(type, hour, minute) }));
    const renderArrowIcon = (type) => (_jsx(ArrowCenterIcon, { width: 20, height: 20, style: {
            transform: isTimeClick[type] ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
        } }));
    const handleTimeChange = (type, hour, minute) => {
        setSelectedTimes((prev) => ({
            ...prev,
            [type]: { hour, minute },
        }));
    };
    return (_jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uC601\uC5C5\uC2DC\uAC04" }), _jsxs("div", { className: S.businessTimeContainer, children: [_jsxs("div", { className: S.startTimeWrapper, onClick: () => toggleTimeClick('open'), children: [_jsx("p", { className: S.startTimeLabel, children: "\uC601\uC5C5 \uC2DC\uC791" }), _jsxs("div", { className: S.timeWrapper, children: [_jsx("p", { className: S.time, children: `${selectedTimes.open.hour}시 ${selectedTimes.open.minute}분` }), renderArrowIcon('open')] })] }), isTimeClick.open && renderTimePicker('open'), _jsxs("div", { className: S.startTimeWrapper, onClick: () => toggleTimeClick('close'), children: [_jsx("p", { className: S.startTimeLabel, children: "\uC601\uC5C5 \uC885\uB8CC" }), _jsxs("div", { className: S.timeWrapper, children: [_jsx("p", { className: S.time, children: `${selectedTimes.close.hour}시 ${selectedTimes.close.minute}분` }), renderArrowIcon('close')] })] }), isTimeClick.close && renderTimePicker('close')] })] }));
}
