import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import { AddIcon, ArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/layout/NavigationBar';
import { useRef, useState } from 'react';
import Button from '@/components/common/Button';
import { useAtom } from 'jotai/index';
import { createRoomAtom } from '@/shared/store/createRoomAtom';
import { validateCreateRoomInput } from '@/shared/helpers/validateCreateRoom';
export default function CreateRoom() {
    const navigate = useNavigate();
    const [isUpload, setIsUpload] = useState(false);
    const [uploadImage, setUploadImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [, setRoomList] = useAtom(createRoomAtom);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [additionalDescription, setAdditionalDescription] = useState('');
    const [price, setPrice] = useState('');
    const ImageInputRef = useRef(null);
    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadImage(file);
            setPreviewUrl(URL.createObjectURL(file));
            setIsUpload(true);
        }
    };
    const handleImageUploadBtn = () => {
        ImageInputRef.current?.click();
    };
    const handleCreateRoomBtnClick = () => {
        const validation = validateCreateRoomInput({
            name,
            description,
            additionalDescription,
            price,
            image: uploadImage,
        });
        if (!validation.valid) {
            alert(validation.message);
            return;
        }
        const newRoom = {
            name: name,
            description: description,
            additionalDescription: additionalDescription,
            price: Number(price),
            image: uploadImage,
        };
        setRoomList((prev) => [...prev, newRoom]);
        navigate('/spaceOwner/space/create');
    };
    return (_jsxs("div", { className: S.container, children: [_jsx("header", { className: S.header, children: _jsx(ArrowIcon, { onClick: () => navigate(-1) }) }), _jsxs("div", { className: S.contentContainer, children: [_jsxs("div", { className: S.imageUploadContainer, onClick: handleImageUploadBtn, children: [_jsx("input", { ref: ImageInputRef, className: S.imageUploadInput, type: "file", accept: "image/*", hidden: true, onChange: handleImageUpload }), isUpload ? (_jsx("img", { src: previewUrl, className: S.previewImage, alt: "\uC5C5\uB85C\uB4DC\uB41C \uC774\uBBF8\uC9C0" })) : (_jsxs("div", { className: S.addImageContainer, children: [_jsx(AddIcon, { width: 80, height: 80 }), _jsx("p", { className: S.imageAddText, children: "\uBC29 \uC0AC\uC9C4 \uCD94\uAC00" })] }))] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uC7A5\uC18C\uBA85" }), _jsx("input", { className: S.roomNameInput, placeholder: "\uC7A5\uC18C\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", value: name, onChange: (e) => setName(e.target.value) })] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uC18C\uAC1C" }), _jsx("textarea", { className: S.roomDescriptionInput, placeholder: "\uBC29\uC744 \uC124\uBA85\uD574\uC8FC\uC138\uC694", value: description, onChange: (e) => setDescription(e.target.value) })] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uAC00\uACA9 / \uC2DC\uAC04" }), _jsxs("div", { className: S.roomPriceContainer, children: [_jsx("input", { className: S.roomPriceInput, type: "number", placeholder: "0", value: price, onChange: (e) => setPrice(e.target.value) }), _jsx("p", { className: S.priceIconText, children: "\u20A9" })] })] }), _jsxs("div", { className: S.categoryContainer, children: [_jsx("p", { className: S.categoryLabel, children: "\uBD80\uAC00 \uC124\uBA85" }), _jsx("textarea", { className: S.roomDescriptionInput, placeholder: "\uBD80\uAC00 \uC124\uBA85\uC744 \uC801\uC5B4\uC8FC\uC138\uC694", value: additionalDescription, onChange: (e) => setAdditionalDescription(e.target.value) })] }), _jsx(Button, { type: "submit", size: "lg", color: "primary", onClick: handleCreateRoomBtnClick, children: "\uCD94\uAC00\uD558\uAE30" })] }), _jsx(NavigationBar, {})] }));
}
