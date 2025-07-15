import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import theme from '@/shared/styles/theme.css';
import { SearchIcon, FilterIcon, CloseIcon } from '@/assets';
import PlaceItem from '@/components/PlaceItem';
import { useNavigate } from 'react-router-dom';
import { usePlaces } from '@/features/band/services/band.query';
import { useState } from 'react';
import Hangul from 'hangul-js';
import { useAtom } from 'jotai/index';
import { placeFilterAtom } from '@/shared/store/placeFilterAtom';
export default function SearchPlace() {
    const navigate = useNavigate();
    const [searchPlaceKeyword, setSearchPlaceKeyword] = useState('');
    const [placeFilter] = useAtom(placeFilterAtom);
    const { data: places } = usePlaces();
    const sortPlaceType = (types) => {
        return types
            .slice()
            .sort((a, b) => (a === '합주실' ? -1 : b === '합주실' ? 1 : 0))
            .join(', ');
    };
    const filteredPlaces = places?.filter((place) => {
        const keywordLower = searchPlaceKeyword.toLowerCase();
        const name = place.name ?? '';
        const matchesKeyword = name.toLowerCase().includes(keywordLower) ||
            Hangul.search(name, searchPlaceKeyword) > -1;
        const selectedTypes = placeFilter.types;
        const placeTypes = place.type;
        const matchesType = selectedTypes.length === 0
            ? true
            : selectedTypes.length === 1
                ? placeTypes.includes(selectedTypes[0])
                : selectedTypes.every((t) => placeTypes.includes(t));
        const matchesArea = placeFilter.areas.length === 0 ||
            placeFilter.areas.some((area) => place.address.includes(area));
        const matchesPrice = place.rooms?.some((room) => room.price >= placeFilter.priceRange[0] &&
            room.price <= placeFilter.priceRange[1]);
        return matchesKeyword && matchesType && matchesArea && matchesPrice;
    });
    return (_jsxs("div", { className: S.container, children: [_jsx("div", { className: S.headerContainer, children: _jsxs("div", { className: S.searchWrapper, children: [searchPlaceKeyword ? (_jsx(CloseIcon, { className: S.searchIcon, width: 24, height: 24, color: theme.gray['500'], onClick: () => setSearchPlaceKeyword('') })) : (_jsx(SearchIcon, { className: S.searchIcon, width: 24, height: 24, color: theme.gray['500'] })), _jsx("input", { className: S.searchInput, placeholder: "\uC7A5\uC18C\uBA85\uC73C\uB85C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694", value: searchPlaceKeyword, onChange: (e) => setSearchPlaceKeyword(e.target.value) })] }) }), _jsxs("div", { className: S.filterContainer, children: [_jsx("div", { className: S.filterBtnContainer, onClick: () => navigate('/band/place/filter'), children: _jsx(FilterIcon, {}) }), _jsxs("div", { className: S.selectedFilterWrapper, children: [placeFilter.types.length > 0 && (_jsx("div", { className: S.selectFilterContainer, children: _jsx("p", { className: S.selectFilterText, children: placeFilter.types.join(', ') }) })), (placeFilter.priceRange[0] !== 0 ||
                                placeFilter.priceRange[1] !== 250000) && (_jsx("div", { className: S.selectFilterContainer, children: _jsx("p", { className: S.selectFilterText, children: `${placeFilter.priceRange[0].toLocaleString()}원 ~ ${placeFilter.priceRange[1].toLocaleString()}원` }) })), placeFilter.areas.length > 0 && (_jsx("div", { className: S.selectFilterContainer, children: _jsx("p", { className: S.selectFilterText, children: `${placeFilter.areas.length}개의 지역` }) }))] })] }), _jsx("div", { className: S.placesContainer, children: filteredPlaces?.map((place) => (_jsx(PlaceItem, { imageUrl: place.imageUrl, placename: place.name, address: place.address, type: sortPlaceType(place.type), onClick: () => navigate(`/band/place/${place.id}`) }, place.id))) }), _jsx(NavigationBar, {})] }));
}
