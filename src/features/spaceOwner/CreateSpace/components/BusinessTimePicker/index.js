import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import * as S from './style.css';
import Picker from 'react-mobile-picker';
export default function BusinessTimePicker({ onTimeChange }) {
    const [time, setTime] = useState({ hour: '00', minute: '00' });
    const handlePickerChange = (newValue) => {
        setTime({
            hour: newValue.hour,
            minute: newValue.minute,
        });
        onTimeChange(newValue.hour, newValue.minute);
    };
    return (_jsx("div", { style: { width: '220px' }, children: _jsxs(Picker, { value: time, onChange: handlePickerChange, wheelMode: "normal", itemHeight: 40, height: 120, children: [_jsx(Picker.Column, { name: "hour", children: Array.from({ length: 24 }).map((_, index) => (_jsx(Picker.Item, { value: index < 10 ? `0${index}` : `${index}`, children: ({ selected }) => (_jsx("div", { className: `${S.item} ${selected ? S.selected : ''}`, children: index < 10 ? `0${index}` : index })) }, index))) }), _jsx(Picker.Column, { name: "minute", children: ['00', '30'].map((m) => (_jsx(Picker.Item, { value: m, children: ({ selected }) => (_jsx("div", { className: `${S.item} ${selected ? S.selected : ''}`, children: m })) }, m))) })] }) }));
}
