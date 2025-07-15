import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { CloseIcon } from '@/assets';
import { PlaceTypeFilter } from './components/PlaceTypeFilter';
import { PriceRangeFilter } from './components/PlaceRangeFilter';
import { AreaFilter } from './components/AreaFilter';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { placeFilterAtom } from '@/shared/store/placeFilterAtom';
export default function PlaceFilter() {
    const navigate = useNavigate();
    const placeTypes = ['합주실', '공연장'];
    const [filter, setFilter] = useAtom(placeFilterAtom);
    const toggleType = (type) => {
        const isSelected = filter.types.includes(type);
        const newTypes = isSelected
            ? filter.types.filter((t) => t !== type)
            : [...filter.types, type];
        setFilter({ ...filter, types: newTypes });
    };
    const toggleAreaItem = (district) => {
        const isSelected = filter.areas.includes(district);
        const newAreas = isSelected
            ? filter.areas.filter((area) => area !== district)
            : [...filter.areas, district];
        setFilter({ ...filter, areas: newAreas });
    };
    const resetFilters = () => {
        setFilter({
            types: [],
            priceRange: [0, 250000],
            areas: [],
        });
    };
    return (_jsxs("div", { className: S.container, children: [_jsxs("div", { className: S.filterContainer, children: [_jsxs("header", { className: S.filterHeader, children: [_jsx(CloseIcon, { onClick: () => navigate(-1) }), _jsx("p", { className: S.headerText, children: "\uD544\uD130" }), _jsx("p", { className: S.resetText, onClick: resetFilters, children: "\uCD08\uAE30\uD654" })] }), _jsxs("div", { className: S.filterContentWrapper, children: [_jsx(PlaceTypeFilter, { types: placeTypes, checkedTypes: filter.types, toggleType: toggleType }), _jsx(PriceRangeFilter, { priceRange: filter.priceRange, setPriceRange: (range) => setFilter({ ...filter, priceRange: range }) }), _jsx(AreaFilter, { areaItems: filter.areas, toggleAreaItem: toggleAreaItem, resetAreaItems: () => setFilter({ ...filter, areas: [] }) })] })] }), _jsx(NavigationBar, {})] }));
}
