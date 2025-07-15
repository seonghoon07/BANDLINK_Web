import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { AddIcon, ArrowCenterIcon, ArrowIcon } from '@/assets';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { rentalEndTimeAtom, rentalStartTimeAtom } from '@/shared/store/atom';
import Button from '@/components/common/Button';
import { useCreatePerformanceMutation } from '@/features/band/services/band.mutation';
import { convertDateTimeValueToISO } from '@/shared/utils/convertDateTimeValueToISO';
import { useRoomReservation } from '@/features/band/services/band.query';
import { formatKoreanDatetime } from '@/shared/utils/date';
import { calculateUsedHours } from '@/shared/utils/caculateTime';
import { createPerformanceForm } from '@/shared/helpers/createPerformanceForm';
export default function PerformanceCreate() {
    const navigate = useNavigate();
    const [isDrowdownOpen, setIsDrowdownOpen] = useState(false);
    const [isUpload, setIsUpload] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [isStartTimeOpen, setIsStartTimeOpen] = useState(false);
    const [isEndTimeOpen, setIsEndTimeOpen] = useState(false);
    const startTime = useAtomValue(rentalStartTimeAtom);
    const endTime = useAtomValue(rentalEndTimeAtom);
    const [performanceForm, setPerformanceForm] = useState({
        title: '',
        description: '',
        poster: null,
        posterUrl: '',
        address: '',
        startTime: startTime ? convertDateTimeValueToISO(startTime, 2025) : '',
        endTime: endTime ? convertDateTimeValueToISO(endTime, 2025) : '',
        price: selectedPlace ? selectedPlace.price : 0,
        roomId: selectedPlace ? selectedPlace.roomId : '',
    });
    const inputRef = useRef(null);
    const { mutate: createPerformanceMutate } = useCreatePerformanceMutation();
    const { data: roomReservations } = useRoomReservation();
    useEffect(() => {
        setPerformanceForm((prev) => ({
            ...prev,
            startTime: startTime
                ? convertDateTimeValueToISO(startTime, 2025)
                : prev.startTime,
            endTime: endTime
                ? convertDateTimeValueToISO(endTime, 2025)
                : prev.endTime,
        }));
    }, [startTime, endTime]);
    useEffect(() => {
        if (!selectedPlace)
            return;
        setPerformanceForm((prev) => ({
            ...prev,
            startTime: selectedPlace.startTime,
            endTime: selectedPlace.endTime,
            address: selectedPlace.address,
            roomId: selectedPlace.roomId,
            price: selectedPlace.price,
        }));
    }, [selectedPlace]);
    const toggleDropDown = () => setIsDrowdownOpen((prev) => !prev);
    const handleImageUploadBtn = () => {
        inputRef.current?.click();
    };
    const handleSelectPlace = ({ roomId, roomName, address, startTime, endTime, price, }) => {
        setSelectedPlace({ roomId, roomName, address, startTime, endTime, price });
        setIsDrowdownOpen(false);
    };
    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPerformanceForm((prev) => ({
                ...prev,
                posterUrl: reader.result,
                poster: file,
            }));
            setIsUpload(true);
        };
    };
    const createFormData = (performanceForm) => {
        const formDataBody = new FormData();
        formDataBody.append('title', performanceForm.title);
        formDataBody.append('description', performanceForm.description);
        if (performanceForm.poster) {
            formDataBody.append('poster', performanceForm.poster);
        }
        formDataBody.append('address', performanceForm.address);
        formDataBody.append('start_time', performanceForm.startTime);
        formDataBody.append('end_time', performanceForm.endTime);
        formDataBody.append('price', performanceForm.price.toString());
        formDataBody.append('roomId', performanceForm.roomId);
        return formDataBody;
    };
    const onCreatePerformanceBtnClick = () => {
        const errorMessage = createPerformanceForm(performanceForm);
        if (errorMessage) {
            alert(errorMessage);
            return;
        }
        const createPerformanceBody = createFormData(performanceForm);
        createPerformanceMutate(createPerformanceBody, {
            onSuccess: () => {
                alert('공연이 생성되었습니다.');
                navigate('/band/performance');
            },
            onError: () => {
                alert('공연을 생성하는 도중 문제가 발생하였습니다.');
            },
        });
    };
    return (_jsxs("div", { className: S.container, children: [_jsx("header", { className: S.header, children: _jsx(ArrowIcon, { width: 24, height: 24, onClick: () => navigate(-1) }) }), _jsxs("div", { className: S.createForm, children: [_jsxs("div", { className: S.imageUploadContainer, onClick: handleImageUploadBtn, children: [_jsx("input", { ref: inputRef, className: S.imageUploadInput, type: "file", accept: "image/*", hidden: true, onChange: handleImageUpload }), isUpload ? (_jsx("img", { src: performanceForm.posterUrl, className: S.previewImage, alt: "\uC5C5\uB85C\uB4DC\uB41C \uC774\uBBF8\uC9C0" })) : (_jsxs("div", { className: S.addImageContainer, children: [_jsx(AddIcon, { width: 80, height: 80 }), _jsx("p", { className: S.imageAddText, children: "\uD3EC\uC2A4\uD130 \uCD94\uAC00" })] }))] }), _jsxs("div", { className: S.infoContainer, children: [_jsx("p", { className: S.label, children: "\uC81C\uBAA9" }), _jsx("input", { className: S.titleInput, placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", value: performanceForm.title, onChange: (e) => setPerformanceForm((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                })) })] }), _jsxs("div", { className: S.infoContainer, children: [_jsx("p", { className: S.label, children: "\uC18C\uAC1C" }), _jsx("textarea", { className: S.descriptionInput, value: performanceForm.description, onChange: (e) => setPerformanceForm((prev) => ({
                                    ...prev,
                                    description: e.target.value,
                                })) })] }), _jsx("div", { className: S.deviderLine }), _jsxs("div", { className: S.infoContainer, children: [_jsx("p", { className: S.label, children: "\uC7A5\uC18C" }), _jsxs("div", { className: S.dropdownList, children: [_jsxs("div", { className: S.dropdownItem, onClick: toggleDropDown, children: [_jsxs("div", { className: S.placeInfoWrapper, children: [_jsx("p", { className: S.placeName, children: selectedPlace ? selectedPlace.roomName : '' }), selectedPlace && (_jsx("p", { className: S.address, children: selectedPlace.address }))] }), _jsx(ArrowCenterIcon, { className: `${S.dropdownIcon} ${isDrowdownOpen ? S.dropdownIconOpen : ''}`, width: 20, height: 20 })] }), isDrowdownOpen &&
                                        roomReservations?.map((roomInfo) => (_jsx("div", { className: S.dropdownItem, onClick: () => handleSelectPlace({
                                                roomId: roomInfo.roomId,
                                                roomName: `${roomInfo.roomName} (${roomInfo.placeName})`,
                                                address: roomInfo.address,
                                                startTime: roomInfo.startDate,
                                                endTime: roomInfo.endDate,
                                                price: roomInfo.price,
                                            }), children: _jsxs("div", { className: S.placeInfoWrapper, children: [_jsxs("p", { className: S.placeName, children: [roomInfo.roomName, " (", roomInfo.placeName, ")"] }), _jsx("p", { className: S.address, children: roomInfo.address })] }) }, roomInfo.id)))] })] }), _jsxs("div", { className: S.infoContainer, children: [_jsx("p", { className: S.label, children: "\uC2DC\uAC04" }), _jsxs("div", { className: S.timeWrapper, children: [_jsxs("p", { className: S.availableTime, children: ["\uCD1D", ' ', _jsx("span", { className: S.yellowColor, children: selectedPlace
                                                    ? `${calculateUsedHours(new Date(selectedPlace.startTime), new Date(selectedPlace.endTime))}시간`
                                                    : '0시간' }), ' ', "\uC0AC\uC6A9\uAC00\uB2A5"] }), _jsxs("div", { className: S.startTimeContainer, onClick: () => setIsStartTimeOpen(!isStartTimeOpen), children: [_jsx("p", { className: S.borrowText, children: "\uB300\uC5EC \uC2DC\uC791" }), _jsx("div", { className: S.selectTimeContainer, children: _jsx("p", { className: S.selectTime, children: performanceForm.startTime && selectedPlace
                                                        ? formatKoreanDatetime(selectedPlace.startTime)
                                                        : '-' }) })] }), _jsxs("div", { className: S.startTimeContainer, onClick: () => setIsEndTimeOpen(!isEndTimeOpen), children: [_jsx("p", { className: S.borrowText, children: "\uB300\uC5EC \uC885\uB8CC" }), _jsx("div", { className: S.selectTimeContainer, children: _jsx("p", { className: S.selectTime, children: performanceForm.endTime && selectedPlace
                                                        ? formatKoreanDatetime(selectedPlace.endTime)
                                                        : '-' }) })] })] })] }), _jsxs("div", { className: S.infoContainer, children: [_jsx("p", { className: S.label, children: "\uAC00\uACA9" }), _jsxs("div", { className: S.priceInput, children: [_jsx("p", { className: S.price, children: selectedPlace ? selectedPlace.price.toLocaleString() : 0 }), _jsx("p", { className: S.wonText, children: "\u20A9" })] })] }), _jsx(Button, { type: "submit", color: "primary", size: "lg", onClick: onCreatePerformanceBtnClick, children: "\uACF5\uC5F0 \uC0DD\uC131" })] }), _jsx(NavigationBar, {})] }));
}
