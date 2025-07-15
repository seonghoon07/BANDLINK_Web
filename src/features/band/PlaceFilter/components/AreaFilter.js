import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from '../style.css';
import { busanDistricts } from '@/shared/libs/areaItems';
export function AreaFilter({ areaItems, toggleAreaItem, resetAreaItems, }) {
    return (_jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryTitle, children: "\uC9C0\uC5ED" }), _jsxs("div", { className: S.selectAreaContainer, children: [_jsx("button", { className: S.allAreaBtn({ selected: areaItems.length === 0 }), onClick: resetAreaItems, children: "\uC804\uCCB4" }), _jsx("div", { className: S.areaWrapper, children: busanDistricts.map((district) => {
                            const isSelected = areaItems.includes(district);
                            return (_jsx("button", { className: isSelected ? S.checkedAreaBtn : S.areaBtn, onClick: () => toggleAreaItem(district), children: district }, district));
                        }) })] })] }));
}
