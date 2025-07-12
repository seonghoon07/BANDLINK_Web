import * as S from './style.css';
import { AddIcon, ArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/layout/NavigationBar';
import React, { useRef, useState } from 'react';
import Button from '@/components/common/Button';
import { useAtom } from 'jotai/index';
import { createRoomAtom } from '@/shared/store/createRoomAtom';

export default function CreateRoom() {
  const navigate = useNavigate();
  const [isUpload, setIsUpload] = useState(false);
  const [uploadImage, setUploadImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [, setRoomList] = useAtom(createRoomAtom);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [additionalDescription, setAdditionalDescription] =
    useState<string>('');
  const [price, setPrice] = useState<string>('');
  const ImageInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (!uploadImage) {
      alert('사진을 업로드해주세요');
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

  return (
    <div className={S.container}>
      <header className={S.header}>
        <ArrowIcon onClick={() => navigate(-1)} />
      </header>
      <div className={S.contentContainer}>
        <div className={S.imageUploadContainer} onClick={handleImageUploadBtn}>
          <input
            ref={ImageInputRef}
            className={S.imageUploadInput}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
          {isUpload ? (
            <img
              src={previewUrl}
              className={S.previewImage}
              alt="업로드된 이미지"
            />
          ) : (
            <div className={S.addImageContainer}>
              <AddIcon width={80} height={80} />
              <p className={S.imageAddText}>방 사진 추가</p>
            </div>
          )}
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>장소명</p>
          <input
            className={S.roomNameInput}
            placeholder="장소명을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>소개</p>
          <textarea
            className={S.roomDescriptionInput}
            placeholder="방을 설명해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>가격 / 시간</p>
          <div className={S.roomPriceContainer}>
            <input
              className={S.roomPriceInput}
              type="number"
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <p className={S.priceIconText}>₩</p>
          </div>
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>부가 설명</p>
          <textarea
            className={S.roomDescriptionInput}
            placeholder="부가 설명을 적어주세요"
            value={additionalDescription}
            onChange={(e) => setAdditionalDescription(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          color="primary"
          onClick={handleCreateRoomBtnClick}
        >
          추가하기
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
