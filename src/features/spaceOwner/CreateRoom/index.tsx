import React, { useRef, useState } from 'react';
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { BusinessDay } from '@/features/spaceOwner/CreateRoom/components/BusinessDay';
import { PlaceType } from '@/features/spaceOwner/CreateRoom/components/PlaceType';
import { AddIcon, ArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';

export default function CreateRoom() {
  const navigate = useNavigate();
  const reader = new FileReader();
  const [isUpload, setIsUpload] = useState(false);
  const [uploadImage, setUploadImage] = useState('');
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState<string[]>([]);
  const [selectedBusinessDays, setSelectedBusinessDays] = useState<string[]>(
    []
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadImage(reader.result as string);
      setIsUpload(true);
    };
  };

  const handleImageUploadBtn = () => {
    inputRef.current?.click();
  };

  const handlePlaceTypeSelect = (type: string) => {
    setSelectedPlaceTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const handleBusinessDaySelect = (day: string) => {
    setSelectedBusinessDays((prev) =>
      prev.includes(day) ? prev.filter((item) => item !== day) : [...prev, day]
    );
  };

  return (
    <div className={S.container}>
      <header className={S.header}>
        <ArrowIcon onClick={() => navigate(-1)} />
      </header>
      <div className={S.contentContainer}>
        <div className={S.imageUploadContainer} onClick={handleImageUploadBtn}>
          <input
            ref={inputRef}
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
              <p className={S.imageAddText}>장소 사진 추가</p>
            </div>
          )}
        </div>

        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>장소명</p>
          <input
            className={S.placeNameInput}
            placeholder="장소명을 입력해주세요."
          />
        </div>

        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>장소 타입 (중복 선택 가능)</p>
          <div className={S.placeTypeWrapper}>
            {['합주실', '소극장'].map((label) => (
              <PlaceType
                key={label}
                label={label}
                selected={selectedPlaceTypes.includes(label)}
                onClick={() => handlePlaceTypeSelect(label)}
              />
            ))}
          </div>
        </div>

        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>영업일</p>
          <div className={S.placeTypeWrapper}>
            {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
              <BusinessDay
                key={day}
                label={day}
                selected={selectedBusinessDays.includes(day)}
                onClick={() => handleBusinessDaySelect(day)}
              />
            ))}
          </div>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
}
