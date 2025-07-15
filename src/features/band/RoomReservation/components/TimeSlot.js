import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from '../style.css';
export default function TimeSlot({ selectedRange, setSelectedRange, unavailableHours, }) {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const handleHourClick = (hour) => {
        if (!selectedRange) {
            setSelectedRange([hour, hour]);
        }
        else {
            const [start, end] = selectedRange;
            if (hour >= start && hour <= end) {
                setSelectedRange([hour, hour]);
            }
            else {
                const newStart = Math.min(hour, start);
                const newEnd = Math.max(hour, start);
                const hasUnavailable = unavailableHours.some((unavailableHour) => unavailableHour >= newStart && unavailableHour <= newEnd);
                if (hasUnavailable) {
                    setSelectedRange([hour, hour]);
                }
                else {
                    setSelectedRange([newStart, newEnd]);
                }
            }
        }
    };
    return (_jsxs("div", { className: S.timeSlotContainer, children: [_jsx("div", { className: S.timeSlotWrapper, children: hours.map((hour, index) => {
                    const isFirst = index === 0;
                    const isLast = index === hours.length - 1;
                    return (_jsxs("div", { className: S.timeSlot, children: [(hour === 0 || hour === 12) && (_jsx("p", { className: S.timeLabel, children: hour === 0 ? '오전' : '오후' })), _jsxs("div", { className: S.timeBlockContainer, children: [_jsxs("p", { className: S.time, children: [hour, "\uC2DC"] }), _jsx("div", { className: [
                                            S.timeBlock,
                                            unavailableHours.includes(hour)
                                                ? S.closed
                                                : selectedRange &&
                                                    hour >= selectedRange[0] &&
                                                    hour <= selectedRange[1]
                                                    ? S.selected
                                                    : S.unselected,
                                            isFirst && S.roundedLeft,
                                            isLast && S.roundedRight,
                                        ]
                                            .filter(Boolean)
                                            .join(' '), onClick: unavailableHours.includes(hour)
                                            ? undefined
                                            : () => handleHourClick(hour) }, hour)] })] }, hour));
                }) }), _jsxs("div", { className: S.labelContainer, children: [_jsxs("div", { className: S.labelWrapper, children: [_jsx("div", { className: S.labelColorBox.selected }), _jsx("p", { className: S.labelText, children: "\uC120\uD0DD\uB428" })] }), _jsxs("div", { className: S.labelWrapper, children: [_jsx("div", { className: S.labelColorBox.unselected }), _jsx("p", { className: S.labelText, children: "\uC120\uD0DD\uB418\uC9C0 \uC54A\uC74C" })] }), _jsxs("div", { className: S.labelWrapper, children: [_jsx("div", { className: S.labelColorBox.closed }), _jsx("p", { className: S.labelText, children: "\uB9C8\uAC10\uB428" })] })] })] }));
}
