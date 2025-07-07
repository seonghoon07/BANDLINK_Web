import React, { useEffect, useState } from 'react';
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

type PlaceInfo = {
  roomId: string;
  roomName: string;
  address: string;
  startTime: string;
  endTime: string;
  price: number;
};

type PerformanceForm = {
  title: string;
  description: string;
  poster: File | null;
  posterUrl: string;
  address: string;
  startTime: string;
  endTime: string;
  price: number;
  roomId: string;
};

export default function PerformanceCreate() {
  const navigate = useNavigate();
  const [isDrowdownOpen, setIsDrowdownOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<PlaceInfo | null>(null);
  const [isStartTimeOpen, setIsStartTimeOpen] = useState(false);
  const [isEndTimeOpen, setIsEndTimeOpen] = useState(false);
  const startTime = useAtomValue(rentalStartTimeAtom);
  const endTime = useAtomValue(rentalEndTimeAtom);
  const [performanceForm, setPerformanceForm] = useState<PerformanceForm>({
    title: '',
    description: '',
    poster: null as File | null,
    posterUrl: '',
    address: '',
    startTime: startTime ? convertDateTimeValueToISO(startTime, 2025) : '',
    endTime: endTime ? convertDateTimeValueToISO(endTime, 2025) : '',
    price: selectedPlace ? selectedPlace.price : 0,
    roomId: selectedPlace ? selectedPlace.roomId : '',
  });

  const inputRef = useRef<HTMLInputElement>(null);
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
    if (!selectedPlace) return;

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

  const handleSelectPlace = ({
    roomId,
    roomName,
    address,
    startTime,
    endTime,
    price,
  }: PlaceInfo) => {
    setSelectedPlace({ roomId, roomName, address, startTime, endTime, price });
    setIsDrowdownOpen(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPerformanceForm((prev) => ({
        ...prev,
        posterUrl: reader.result as string,
        poster: file,
      }));
      setIsUpload(true);
    };
  };

  const createFormData = (performanceForm: PerformanceForm) => {
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
              src={performanceForm.posterUrl}
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
          <input
            className={S.titleInput}
            placeholder="제목을 입력해주세요"
            value={performanceForm.title}
            onChange={(e) =>
              setPerformanceForm((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className={S.infoContainer}>
          <p className={S.label}>소개</p>
          <textarea
            className={S.descriptionInput}
            value={performanceForm.description}
            onChange={(e) =>
              setPerformanceForm((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
        </div>
        <div className={S.deviderLine} />
        <div className={S.infoContainer}>
          <p className={S.label}>장소</p>
          <div className={S.dropdownList}>
            <div className={S.dropdownItem} onClick={toggleDropDown}>
              <div className={S.placeInfoWrapper}>
                <p className={S.placeName}>
                  {selectedPlace ? selectedPlace.roomName : ''}
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
              roomReservations?.map((roomInfo: any) => (
                <div
                  key={roomInfo.id}
                  className={S.dropdownItem}
                  onClick={() =>
                    handleSelectPlace({
                      roomId: roomInfo.roomId,
                      roomName: `${roomInfo.roomName} (${roomInfo.placeName})`,
                      address: roomInfo.address,
                      startTime: roomInfo.startDate,
                      endTime: roomInfo.endDate,
                      price: roomInfo.price,
                    })
                  }
                >
                  <div className={S.placeInfoWrapper}>
                    <p className={S.placeName}>
                      {roomInfo.roomName} ({roomInfo.placeName})
                    </p>
                    <p className={S.address}>{roomInfo.address}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={S.infoContainer}>
          <p className={S.label}>시간</p>
          <div className={S.timeWrapper}>
            <p className={S.availableTime}>
              총{' '}
              <span className={S.yellowColor}>
                {selectedPlace
                  ? `${calculateUsedHours(
                      new Date(selectedPlace.startTime),
                      new Date(selectedPlace.endTime)
                    )}시간`
                  : '0시간'}
              </span>{' '}
              사용가능
            </p>

            <div
              className={S.startTimeContainer}
              onClick={() => setIsStartTimeOpen(!isStartTimeOpen)}
            >
              <p className={S.borrowText}>대여 시작</p>
              <div className={S.selectTimeContainer}>
                <p className={S.selectTime}>
                  {performanceForm.startTime && selectedPlace
                    ? formatKoreanDatetime(selectedPlace.startTime)
                    : '-'}
                </p>
              </div>
            </div>
            <div
              className={S.startTimeContainer}
              onClick={() => setIsEndTimeOpen(!isEndTimeOpen)}
            >
              <p className={S.borrowText}>대여 종료</p>
              <div className={S.selectTimeContainer}>
                <p className={S.selectTime}>
                  {performanceForm.endTime && selectedPlace
                    ? formatKoreanDatetime(selectedPlace.endTime)
                    : '-'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={S.infoContainer}>
          <p className={S.label}>가격</p>
          <div className={S.priceInput}>
            <p className={S.price}>
              {selectedPlace ? selectedPlace.price.toLocaleString() : 0}
            </p>
            <p className={S.wonText}>₩</p>
          </div>
        </div>
        <Button
          type="submit"
          color="primary"
          size="lg"
          onClick={onCreatePerformanceBtnClick}
        >
          공연 생성
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
