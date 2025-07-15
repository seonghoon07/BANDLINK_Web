import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import { ArrowIcon } from '@/assets';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@/components/common/Button';
import NavigationBar from '@/components/layout/NavigationBar';
import { usePerformanceDetail } from '@/features/fan/services/fan.query';
import { formatPerformanceDate } from '@/shared/libs/formatDate';
import { usePerformanceReserveMutation } from '@/features/fan/services/fan.mutation';
export default function PerformanceDetail() {
    const navigate = useNavigate();
    const { performanceId } = useParams();
    const numberPerformanceId = Number(performanceId);
    const { data: performanceDetail } = usePerformanceDetail(numberPerformanceId);
    const { mutate: performanceReserveMutate } = usePerformanceReserveMutation();
    const handleReserveBtnClick = () => {
        const isReserve = confirm('정말 예약하시겠습니까?');
        if (isReserve) {
            performanceReserveMutate(numberPerformanceId, {
                onSuccess: () => {
                    alert('예약되었습니다.');
                    navigate('/fan/tickets');
                },
                onError: () => alert('예약에 실패하였습니다.'),
            });
        }
    };
    return (_jsxs("div", { className: S.container, children: [_jsxs("div", { className: S.contentContainer, children: [_jsxs("div", { className: S.performanceContentContainer, children: [_jsx("div", { className: S.headerContainer, children: _jsx(ArrowIcon, { width: 24, height: 24, onClick: () => navigate(-1) }) }), _jsx("img", { className: S.performanceImg, src: performanceDetail?.posterUrl, alt: "\uACF5\uC5F0 \uC774\uBBF8\uC9C0" }), _jsxs("div", { className: S.infoContainer, children: [_jsxs("div", { className: S.nameAndArtistWrapper, children: [_jsx("p", { className: S.performanceName, children: performanceDetail?.title }), _jsx("p", { className: S.artist, children: performanceDetail?.bandname })] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryName, children: "\uC18C\uAC1C" }), _jsx("p", { className: S.categoryContent, children: performanceDetail?.description })] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryName, children: "\uC7A5\uC18C" }), _jsx("p", { className: S.categoryContent, children: performanceDetail?.address })] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryName, children: "\uAE30\uAC04" }), _jsx("p", { className: S.categoryContent, children: formatPerformanceDate(performanceDetail?.start_time, performanceDetail?.end_time) })] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryName, children: "\uAC00\uACA9" }), _jsx("p", { className: S.categoryContent, children: _jsxs("span", { className: S.price, children: [performanceDetail?.price.toLocaleString(), "\uC6D0"] }) })] })] })] }), _jsx("div", { className: S.reserveBtnContainer, children: _jsx(Button, { type: "button", color: "primary", size: "lg", onClick: handleReserveBtnClick, children: "\uC608\uB9E4\uD558\uAE30" }) })] }), _jsx(NavigationBar, {})] }));
}
