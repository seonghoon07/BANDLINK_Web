import * as S from './style.css';
import { AddIcon, ArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/layout/NavigationBar';
import React, { useRef, useState } from 'react';
import Button from '@/components/common/Button';

export default function CreateRoom() {
  const navigate = useNavigate();
  const reader = new FileReader();
  const [isUpload, setIsUpload] = useState(false);
  const [uploadImage, setUploadImage] = useState('');
  const ImageInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadImage(reader.result as string);
      setIsUpload(true);
    };
  };

  const handleImageUploadBtn = () => {
    ImageInputRef.current?.click();
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
              src={uploadImage}
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
          />
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>소개</p>
          <textarea
            className={S.roomDescriptionInput}
            placeholder="방을 설명해주세요"
          />
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>가격 / 시간</p>
          <div className={S.roomPriceContainer}>
            <input className={S.roomPriceInput} type="number" placeholder="0" />
            <p className={S.priceIconText}>₩</p>
          </div>
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>부가 설명</p>
          <textarea
            className={S.roomDescriptionInput}
            placeholder="부가 설명을 적어주세요"
          />
        </div>
        <Button type="submit" size="lg" color="primary" onClick={() => navigate('/spaceOwner/space/create')}>
          추가하기
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
