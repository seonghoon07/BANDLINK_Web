import { jsx as _jsx } from "react/jsx-runtime";
import * as S from '../style.css';
export const BusinessDay = ({ label, selected, onClick, }) => {
    return (_jsx("div", { className: `${S.businessDay} ${selected ? S.selectedBorder : ''}`, onClick: onClick, children: _jsx("p", { className: `${S.businessDayText} ${selected ? S.selectedColor : ''}`, children: label }) }));
};
