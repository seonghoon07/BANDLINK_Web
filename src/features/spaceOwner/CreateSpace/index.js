import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import DaumPostcodeEmbed from 'react-daum-postcode';
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import Button from '@/components/common/Button';
import RoomItem from '@/components/RoomItem';
import BusinessTime from '@/features/spaceOwner/CreateSpace/components/BusinessTime';
import { BusinessDay } from '@/features/spaceOwner/CreateSpace/components/BusinessDay';
import { PlaceType } from '@/features/spaceOwner/CreateSpace/components/PlaceType';
import { AddIcon, ArrowIcon } from '@/assets';
import { createRoomAtom } from '@/shared/store/createRoomAtom';
import { createPlaceAtom, initialPlaceState, } from '@/shared/store/createPlaceAtom';
import { useCreatePlace } from '@/features/spaceOwner/services/spaceOwner.mutation';
import { isCreateSpaceEmpty } from '@/shared/helpers/isCreateSpaceEmpty';
import { validateCreatePlaceInput } from '@/shared/helpers/validateCreatePlace';
export default function CreateSpace() {
    const navigate = useNavigate();
    const [roomList, setRoomList] = useAtom(createRoomAtom);
    const [placeState, setPlaceState] = useAtom(createPlaceAtom);
    const inputRef = useRef(null);
    const { mutate: createPlaceMutate, isPending: isCreating } = useCreatePlace();
    const previewUrl = placeState.uploadImage
        ? URL.createObjectURL(placeState.uploadImage)
        : '';
    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setPlaceState((prev) => ({
                ...prev,
                uploadImage: file,
                isUpload: true,
            }));
        }
    };
    const handleImageUploadBtn = () => inputRef.current?.click();
    const handlePlaceTypeSelect = (type) => {
        setPlaceState((prev) => ({
            ...prev,
            selectedPlaceTypes: prev.selectedPlaceTypes.includes(type)
                ? prev.selectedPlaceTypes.filter((item) => item !== type)
                : [...prev.selectedPlaceTypes, type],
        }));
    };
    const handleBusinessDaySelect = (day) => {
        setPlaceState((prev) => ({
            ...prev,
            selectedBusinessDays: prev.selectedBusinessDays.includes(day)
                ? prev.selectedBusinessDays.filter((item) => item !== day)
                : [...prev.selectedBusinessDays, day],
        }));
    };
    const formatBusinessNumber = (raw) => {
        if (!/^\d{10}$/.test(raw))
            return raw;
        return `${raw.slice(0, 3)}-${raw.slice(3, 5)}-${raw.slice(5)}`;
    };
    const handleCompletePost = (data) => {
        setPlaceState((prev) => ({
            ...prev,
            address: data.address,
            postCode: data.zonecode,
            isFindAddressClick: false,
        }));
    };
    const onCreateBtnClick = () => {
        const validation = validateCreatePlaceInput(placeState);
        if (!validation.valid) {
            alert(validation.message);
            return;
        }
        if (roomList.length === 0) {
            alert('1개 이상의 방이 존재해야 합니다');
            return;
        }
        const formData = new FormData();
        if (placeState.uploadImage) {
            formData.append('placeImage', placeState.uploadImage);
        }
        else {
            alert('이미지를 등록해주세요');
            return;
        }
        roomList.forEach((room) => {
            if (room.image) {
                formData.append('roomImages', room.image);
            }
        });
        const placeData = {
            name: placeState.placeName,
            type: placeState.selectedPlaceTypes,
            businessRegistrationNumber: formatBusinessNumber(placeState.businessNumber),
            businessDays: placeState.selectedBusinessDays,
            address: `${placeState.address} (${placeState.detailAddress})`,
            openTime: `${placeState.selectedTimes.open.hour}:${placeState.selectedTimes.open.minute}`,
            closeTime: `${placeState.selectedTimes.close.hour}:${placeState.selectedTimes.close.minute}`,
            image: null,
        };
        const roomData = roomList.map((room) => ({
            name: room.name,
            description: room.description,
            additionalDescription: room.additionalDescription,
            price: room.price,
            image: null,
        }));
        const dto = {
            place: placeData,
            rooms: roomData,
        };
        formData.append('dto', JSON.stringify(dto));
        createPlaceMutate(formData, {
            onSuccess: () => {
                alert('장소를 생성하였습니다.');
                setPlaceState(initialPlaceState);
                setRoomList([]);
                navigate('/spaceOwner/space');
            },
        });
    };
    const handleExitClick = () => {
        const isEmpty = isCreateSpaceEmpty(placeState, roomList);
        if (isEmpty) {
            navigate('/spaceOwner/space');
        }
        else {
            const isExit = confirm('입력한 정보가 모두 초기화됩니다. 정말 나가시겠습니까?');
            if (isExit) {
                setPlaceState(initialPlaceState);
                setRoomList([]);
                navigate('/spaceOwner/space');
            }
            else {
                return;
            }
        }
    };
    const placeType = ['합주실', '공연장'];
    const weeks = [
        { label: '월', value: 'Mon' },
        { label: '화', value: 'Tue' },
        { label: '수', value: 'Wed' },
        { label: '목', value: 'Thu' },
        { label: '금', value: 'Fri' },
        { label: '토', value: 'Sat' },
        { label: '일', value: 'Sun' },
    ];
    return (_jsxs("div", { className: S.container, children: [_jsx("header", { className: S.header, children: _jsx(ArrowIcon, { onClick: handleExitClick }) }), _jsxs("div", { className: S.contentContainer, children: [_jsxs("div", { className: S.imageUploadContainer, onClick: handleImageUploadBtn, children: [_jsx("input", { ref: inputRef, className: S.imageUploadInput, type: "file", accept: "image/*", hidden: true, onChange: handleImageUpload }), placeState.isUpload ? (_jsx("img", { src: previewUrl, className: S.previewImage, alt: "\uC5C5\uB85C\uB4DC\uB41C \uC774\uBBF8\uC9C0" })) : (_jsxs("div", { className: S.addImageContainer, children: [_jsx(AddIcon, { width: 80, height: 80 }), _jsx("p", { className: S.imageAddText, children: "\uC7A5\uC18C \uC0AC\uC9C4 \uCD94\uAC00" })] }))] }), _jsx("div", { className: S.dividerLine }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uC7A5\uC18C\uBA85" }), _jsx("input", { className: S.placeNameInput, placeholder: "\uC7A5\uC18C\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", value: placeState.placeName, onChange: (e) => setPlaceState((prev) => ({ ...prev, placeName: e.target.value })) })] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uC8FC\uC18C" }), _jsxs("div", { className: S.addressWrapper, children: [_jsx("input", { className: S.placeNameInput, disabled: true, value: placeState.postCode, onChange: (e) => setPlaceState((prev) => ({ ...prev, postCode: e.target.value })) }), _jsx("button", { className: S.findAddressBtn, onClick: () => setPlaceState((prev) => ({
                                            ...prev,
                                            isFindAddressClick: !prev.isFindAddressClick,
                                        })), children: "\uC8FC\uC18C \uCC3E\uAE30" })] }), placeState.isFindAddressClick && (_jsx(DaumPostcodeEmbed, { onComplete: handleCompletePost })), placeState.address && (_jsxs(_Fragment, { children: [_jsx("div", { className: S.address, children: placeState.address }), _jsx("input", { className: S.placeNameInput, placeholder: "\uC0C1\uC138 \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694", value: placeState.detailAddress, onChange: (e) => setPlaceState((prev) => ({
                                            ...prev,
                                            detailAddress: e.target.value,
                                        })) })] }))] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uC0AC\uC5C5\uC790 \uB4F1\uB85D \uBC88\uD638" }), _jsx("input", { className: S.placeNameInput, placeholder: "\uC608: 1234567890", maxLength: 10, type: "number", value: placeState.businessNumber, onChange: (e) => setPlaceState((prev) => ({
                                    ...prev,
                                    businessNumber: e.target.value,
                                })) })] }), _jsx("div", { className: S.dividerLine }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uC7A5\uC18C \uD0C0\uC785 (\uC911\uBCF5 \uC120\uD0DD \uAC00\uB2A5)" }), _jsx("div", { className: S.placeTypeWrapper, children: placeType.map((label) => (_jsx(PlaceType, { label: label, selected: placeState.selectedPlaceTypes.includes(label), onClick: () => handlePlaceTypeSelect(label) }, label))) })] }), _jsx("div", { className: S.dividerLine }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uC601\uC5C5\uC77C" }), _jsx("div", { className: S.placeTypeWrapper, children: weeks.map((day) => (_jsx(BusinessDay, { label: day.label, selected: placeState.selectedBusinessDays.includes(day.value), onClick: () => handleBusinessDaySelect(day.value) }, day.label))) })] }), _jsx("div", { className: S.dividerLine }), _jsx(BusinessTime, { selectedTimes: placeState.selectedTimes, setSelectedTimes: (selectedTimes) => {
                            if (typeof selectedTimes === 'function') {
                                setPlaceState((prev) => ({
                                    ...prev,
                                    selectedTimes: selectedTimes(prev.selectedTimes),
                                }));
                            }
                            else {
                                setPlaceState((prev) => ({
                                    ...prev,
                                    selectedTimes,
                                }));
                            }
                        } }), _jsx("div", { className: S.dividerLine }), _jsxs("div", { className: S.roomWrapper, children: [_jsx("div", { className: S.room, children: _jsxs("div", { className: S.createRoomContainer, onClick: () => navigate('/spaceOwner/space/create/room'), children: [_jsx(AddIcon, { width: 32, height: 32 }), _jsx("p", { className: S.createRoomText, children: "\uBC29 \uCD94\uAC00" })] }) }), roomList.length > 0 ? (roomList.map((room) => (_jsx(RoomItem, { roomname: room.name, price: room.price, description: room.description, imgUrl: URL.createObjectURL(room.image), onClick: () => { } }, room.name)))) : (_jsx("div", { className: S.roomPlaceholder, children: _jsx("div", { className: S.roomPlaceholderTextWrapper, children: _jsx("p", { className: S.noRoomText, children: "\uCD94\uAC00\uB41C \uBC29\uC774 \uC5C6\uC2B5\uB2C8\uB2E4!" }) }) }))] }), _jsx(Button, { type: "submit", size: "lg", color: "primary", onClick: onCreateBtnClick, disabled: isCreating, children: isCreating ? '장소 생성 중...' : '장소 등록' })] }), _jsx(NavigationBar, {})] }));
}
