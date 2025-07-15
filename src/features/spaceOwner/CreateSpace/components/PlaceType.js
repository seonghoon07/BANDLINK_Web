import { jsx as _jsx } from "react/jsx-runtime";
import * as S from '../style.css';
export const PlaceType = ({ label, selected, onClick, }) => {
    return (_jsx("div", { className: `${S.placeType} ${selected ? S.selectedBorder : ''}`, onClick: onClick, children: _jsx("p", { className: `${S.placeTypeText} ${selected ? S.selectedColor : ''}`, children: label }) }));
};
