import React, { useRef, useState } from 'react';
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { BusinessDay } from '@/features/spaceOwner/CreateSpace/components/BusinessDay';
import { PlaceType } from '@/features/spaceOwner/CreateSpace/components/PlaceType';
import { AddIcon, ArrowIcon, SpaceImage } from '@/assets';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import RoomItem from '@/components/RoomItem';
import BusinessTime from '@/features/spaceOwner/CreateSpace/components/BusinessTime';

export default function CreateSpace() {
  const placeType = ['합주실', '소극장'];
  const weeks = ['월', '화', '수', '목', '금', '토', '일'];
  const navigate = useNavigate();
  const reader = new FileReader();
  const [isUpload, setIsUpload] = useState(false);
  const [uploadImage, setUploadImage] = useState('');
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState<string[]>([]);
  const [selectedBusinessDays, setSelectedBusinessDays] = useState<string[]>(
    []
  );
  const [isRoomExists] = useState<boolean>(true);
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
        <ArrowIcon onClick={() => navigate('/spaceOwner/space')} />
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
        <div className={S.dividerLine} />
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>장소명</p>
          <input
            className={S.placeNameInput}
            placeholder="장소명을 입력해주세요."
          />
        </div>
        <div className={S.dividerLine} />
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>장소 타입 (중복 선택 가능)</p>
          <div className={S.placeTypeWrapper}>
            {placeType.map((label) => (
              <PlaceType
                key={label}
                label={label}
                selected={selectedPlaceTypes.includes(label)}
                onClick={() => handlePlaceTypeSelect(label)}
              />
            ))}
          </div>
        </div>
        <div className={S.dividerLine} />
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>영업일</p>
          <div className={S.placeTypeWrapper}>
            {weeks.map((day) => (
              <BusinessDay
                key={day}
                label={day}
                selected={selectedBusinessDays.includes(day)}
                onClick={() => handleBusinessDaySelect(day)}
              />
            ))}
          </div>
        </div>
        <div className={S.dividerLine} />
        <BusinessTime />
        <div className={S.dividerLine} />
        <div className={S.roomWrapper}>
          <div className={S.room}>
            <div
              className={S.createRoomContainer}
              onClick={() => navigate('/spaceOwner/space/create/room')}
            >
              <AddIcon width={32} height={32} />
              <p className={S.createRoomText}>방 추가</p>
            </div>
          </div>
          {isRoomExists ? (
            <>
              <RoomItem
                roomname="[ROOM X] 합주실 1"
                price={14000}
                description={
                  '설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다'
                }
                imgUrl={SpaceImage}
                onClick={() => {}}
              />
            </>
          ) : (
            <div className={S.roomPlaceholder}>
              <div className={S.roomPlaceholderTextWrapper}>
                <p className={S.noRoomText}>추가된 방이 없습니다!</p>
              </div>
            </div>
          )}
        </div>
        <div className={S.dividerLine} />
        <Button type="submit" size="lg" color="primary">
          장소 등록
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
