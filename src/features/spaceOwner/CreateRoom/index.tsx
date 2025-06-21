import React, { useRef, useState } from 'react';
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { BusinessDay } from '@/features/spaceOwner/CreateRoom/components/BusinessDay';
import { PlaceType } from '@/features/spaceOwner/CreateRoom/components/PlaceType';
import { AddIcon, ArrowCenterIcon, ArrowIcon, SpaceImage } from '@/assets';
import { useNavigate } from 'react-router-dom';
import BusinessTimePicker from './components/BusinessTimePicker';
import Button from '@/components/common/Button';
import RoomItem from '@/components/RoomItem';

type selectedTimeType = {
  hour: string;
  minute: string;
};

export default function CreateRoom() {
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
  const [selectedTimes, setSelectedTimes] = useState<{
    start: selectedTimeType;
    end: selectedTimeType;
  }>({
    start: { hour: '00', minute: '00' },
    end: { hour: '00', minute: '00' },
  });
  const [isTimeClick, setIsTimeClick] = useState<{
    start: boolean;
    end: boolean;
  }>({ start: false, end: false });
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

  const handleTimeChange = (
    type: 'start' | 'end',
    hour: string,
    minute: string
  ) => {
    setSelectedTimes((prev) => ({
      ...prev,
      [type]: { hour, minute },
    }));
  };

  const toggleTimeClick = (type: 'start' | 'end') => {
    setIsTimeClick((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const renderTimePicker = (type: 'start' | 'end') => (
    <BusinessTimePicker
      onTimeChange={(hour, minute) => handleTimeChange(type, hour, minute)}
    />
  );

  const renderArrowIcon = (type: 'start' | 'end') => (
    <ArrowCenterIcon
      width={20}
      height={20}
      style={{
        transform: isTimeClick[type] ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
      }}
    />
  );

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
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>영업시간</p>
          <div className={S.businessTimeContainer}>
            <div
              className={S.startTimeWrapper}
              onClick={() => toggleTimeClick('start')}
            >
              <p className={S.startTimeLabel}>영업 시작</p>
              <div className={S.timeWrapper}>
                <p
                  className={S.time}
                >{`${selectedTimes.start.hour}시 ${selectedTimes.start.minute}분`}</p>
                {renderArrowIcon('start')}
              </div>
            </div>
            {isTimeClick.start && renderTimePicker('start')}
            <div
              className={S.startTimeWrapper}
              onClick={() => toggleTimeClick('end')}
            >
              <p className={S.startTimeLabel}>영업 종료</p>
              <div className={S.timeWrapper}>
                <p
                  className={S.time}
                >{`${selectedTimes.end.hour}시 ${selectedTimes.end.minute}분`}</p>
                {renderArrowIcon('end')}
              </div>
            </div>
            {isTimeClick.end && renderTimePicker('end')}
          </div>
        </div>
        <div className={S.dividerLine} />
        <div className={S.roomWrapper}>
          <div className={S.room}>
            <div className={S.createRoomContainer}>
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
