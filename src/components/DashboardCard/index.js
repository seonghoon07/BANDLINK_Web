import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
export default function PerformanceCard({ type, image, title, stateText, onClick, }) {
    const renderStateText = () => {
        if (type === 'place') {
            return _jsx("p", { className: S.stateText, children: stateText });
        }
        if (type === 'live') {
            return _jsxs("p", { className: S.stateText, children: [stateText, "\uBA85 \uC608\uB9E4\uC911"] });
        }
        return _jsxs("p", { className: S.stateText, children: [stateText, "\uC77C \uD6C4"] });
    };
    return (_jsxs("div", { className: S.livePerformanceCard, onClick: onClick, children: [_jsx("img", { className: S.performanceImg, src: image, alt: "\uACF5\uC5F0 \uC774\uBBF8\uC9C0" }), _jsxs("div", { className: S.textWrapper, children: [_jsx("p", { className: S.artistName, children: title }), renderStateText()] })] }));
}
