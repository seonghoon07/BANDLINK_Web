import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckIcon } from '@/assets';
import * as S from '../style.css';
export function PlaceTypeFilter({ types, checkedTypes, toggleType, }) {
    return (_jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryTitle, children: "\uC7A5\uC18C" }), _jsx("div", { className: S.typeOption, children: types.map((type) => {
                    const isChecked = checkedTypes.includes(type);
                    return (_jsxs("div", { className: S.typeItem, onClick: () => toggleType(type), children: [_jsx("p", { className: S.type, children: type }), _jsx("div", { className: isChecked ? S.checkedBox : S.uncheckedBox, children: isChecked && _jsx(CheckIcon, { width: 18, height: 18 }) })] }, type));
                }) })] }));
}
