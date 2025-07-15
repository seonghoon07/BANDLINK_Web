import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTrackBackground, Range } from 'react-range';
import * as S from '../style.css';
import theme from '@/shared/styles/theme.css';
export function PriceRangeFilter({ priceRange, setPriceRange, }) {
    return (_jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryTitle, children: "\uAC00\uACA9 (\uC2DC\uAC04 \uB2F9)" }), _jsxs("p", { className: S.price, children: [priceRange[0].toLocaleString(), "\uC6D0 ~ ", priceRange[1].toLocaleString(), "\uC6D0"] }), _jsx(Range, { values: priceRange, onChange: (vals) => setPriceRange([vals[0], vals[1]]), min: 0, max: 250000, step: 5000, renderTrack: ({ props, children }) => (_jsx("div", { ...props, className: S.track, style: {
                        background: getTrackBackground({
                            values: priceRange,
                            colors: [
                                theme.gray['400'],
                                theme.yellow['500'],
                                theme.gray['400'],
                            ],
                            min: 0,
                            max: 250000,
                        }),
                    }, children: children })), renderThumb: ({ props }) => _jsx("div", { ...props, className: S.thumb }) })] }));
}
