import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import { SearchIcon } from '@/assets';
import theme from '@/shared/styles/theme.css';
import PerformanceItem from '@/components/PerformanceItem';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/layout/NavigationBar';
import { usePerformances } from '@/features/fan/services/fan.query';
import { useState } from 'react';
import Hangul from 'hangul-js';
export default function SearchPerformance() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const { data: performances } = usePerformances();
    const filteredPerformances = performances?.filter((performance) => {
        const keywordLower = keyword.toLowerCase();
        const title = performance.title ?? '';
        const band = performance.bandname ?? '';
        return (title.toLowerCase().includes(keywordLower) ||
            band.toLowerCase().includes(keywordLower) ||
            Hangul.search(title, keyword) > -1 ||
            Hangul.search(band, keyword) > -1);
    });
    return (_jsxs("div", { className: S.container, children: [_jsxs("div", { className: S.contentContainer, children: [_jsx("div", { className: S.headerContainer, children: _jsxs("div", { className: S.searchWrapper, children: [_jsx(SearchIcon, { className: S.searchIcon, width: 24, height: 24, color: theme.gray['500'] }), _jsx("input", { className: S.searchInput, placeholder: "\uACF5\uC5F0\uBA85, \uBC34\uB4DC\uBA85\uC73C\uB85C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694", value: keyword, onChange: (e) => setKeyword(e.target.value) })] }) }), _jsx("div", { className: S.performanceWrapper, children: filteredPerformances?.map((performance) => (_jsx(PerformanceItem, { onClick: () => navigate(`/fan/performances/${performance.id}`), image: performance.posterUrl, title: performance.title, artist: performance.bandname, price: performance.price }, performance.id))) })] }), _jsx(NavigationBar, {})] }));
}
