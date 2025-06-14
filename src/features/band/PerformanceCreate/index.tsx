import React, { useState } from 'react';
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { AddIcon, ArrowCenterIcon, ArrowIcon } from '@/assets';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TimePicker from '@/features/band/PerformanceCreate/TimePicker';
import { useAtomValue } from 'jotai';
import { rentalEndTimeAtom, rentalStartTimeAtom } from '@/shared/store/atom';

const PLACE_OPTIONS = [
  {
    name: '디어뮤직 스튜디오 24시간 무인 음악연습실&합주실',
    address: '부산 남구 진남로',
  },
  {
    name: '코드뮤직 연습실',
    address: '서울 마포구 서교동',
  },
];

export default function PerformanceCreate() {
  const navigate = useNavigate();
  const reader = new FileReader();
  const [isDrowdownOpen, setIsDrowdownOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [uploadImage, setUploadImage] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<{
    name: string;
    address: string;
  } | null>(null);
  const [isStartTimeOpen, setIsStartTimeOpen] = useState(false);
  const [isEndTimeOpen, setIsEndTimeOpen] = useState(false);
  const startTime = useAtomValue(rentalStartTimeAtom);
  const endTime = useAtomValue(rentalEndTimeAtom);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleDropDown = () => setIsDrowdownOpen((prev) => !prev);

  const handleImageUploadBtn = () => {
    inputRef.current?.click();
  };

  const handleSelectPlace = (place: { name: string; address: string }) => {
    setSelectedPlace(place);
    setIsDrowdownOpen(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadImage(reader.result as string);
      setIsUpload(true);
    };
  };

  return (
    <div className={S.container}>
      <header className={S.header}>
        <ArrowIcon width={24} height={24} onClick={() => navigate(-1)} />
      </header>
      <div className={S.createForm}>
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
              <p className={S.imageAddText}>포스터 추가</p>
            </div>
          )}
        </div>
        <div className={S.infoContainer}>
          <p className={S.label}>제목</p>
          <input className={S.titleInput} placeholder="제목을 입력해주세요" />
        </div>
        <div className={S.infoContainer}>
          <p className={S.label}>소개</p>
          <textarea className={S.descriptionInput} />
        </div>
        <div className={S.deviderLine} />
        <div className={S.infoContainer}>
          <p className={S.label}>장소</p>
          <div className={S.dropdownList}>
            <div className={S.dropdownItem} onClick={toggleDropDown}>
              <div className={S.placeInfoWrapper}>
                <p className={S.placeName}>
                  {selectedPlace ? selectedPlace.name : ''}
                </p>
                {selectedPlace && (
                  <p className={S.address}>{selectedPlace.address}</p>
                )}
              </div>
              <ArrowCenterIcon
                className={`${S.dropdownIcon} ${isDrowdownOpen ? S.dropdownIconOpen : ''}`}
                width={20}
                height={20}
              />
            </div>
            {isDrowdownOpen &&
              PLACE_OPTIONS.map((place) => (
                <div
                  key={place.name}
                  className={S.dropdownItem}
                  onClick={() => handleSelectPlace(place)}
                >
                  <div className={S.placeInfoWrapper}>
                    <p className={S.placeName}>{place.name}</p>
                    <p className={S.address}>{place.address}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={S.infoContainer}>
          <p className={S.label}>시간</p>
          <div className={S.timeWrapper}>
            <p className={S.availableTime}>
              총 <span className={S.yellowColor}>4시간</span> 사용가능
            </p>
            <div
              className={S.startTimeContainer}
              onClick={() => setIsStartTimeOpen(!isStartTimeOpen)}
            >
              <p className={S.borrowText}>대여 시작</p>
              <div className={S.selectTimeContainer}>
                <p className={S.selectTime}>
                  {startTime
                    ? `${startTime.date} ${startTime.hour}시 ${startTime.minute}분`
                    : '시간을 선택해주세요'}
                </p>
                <div className={S.timeDropdownIcon}>
                  <ArrowCenterIcon width={20} height={20} />
                </div>
              </div>
            </div>
            {isStartTimeOpen && <TimePicker type="start" />}
            <div
              className={S.startTimeContainer}
              onClick={() => setIsEndTimeOpen(!isEndTimeOpen)}
            >
              <p className={S.borrowText}>대여 종료</p>
              <div className={S.selectTimeContainer}>
                <p className={S.selectTime}>
                  {endTime
                    ? `${endTime.date} ${endTime.hour}시 ${endTime.minute}분`
                    : '시간을 선택해주세요'}
                </p>
                <div className={S.timeDropdownIcon}>
                  <ArrowCenterIcon width={20} height={20} />
                </div>
              </div>
            </div>
            {isEndTimeOpen && <TimePicker type="end" />}
          </div>
        </div>
        <div className={S.infoContainer}>
          <p className={S.label}>가격</p>
          <div className={S.priceInput}>
            <p className={S.price}>5000</p>
            <p className={S.wonText}>₩</p>
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
