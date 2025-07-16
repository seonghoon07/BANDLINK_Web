import React, { useRef } from 'react';
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
import {
  createPlaceAtom,
  initialPlaceState,
} from '@/shared/store/createPlaceAtom';
import { useCreatePlace } from '@/features/spaceOwner/services/spaceOwner.mutation';
import { isCreateSpaceEmpty } from '@/shared/helpers/isCreateSpaceEmpty';
import { validateCreatePlaceInput } from '@/shared/helpers/validateCreatePlace';

export default function CreateSpace() {
  const navigate = useNavigate();
  const [roomList, setRoomList] = useAtom(createRoomAtom);
  const [placeState, setPlaceState] = useAtom(createPlaceAtom);
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: createPlaceMutate, isPending: isCreating } = useCreatePlace();

  const previewUrl = placeState.uploadImage
    ? URL.createObjectURL(placeState.uploadImage)
    : '';

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handlePlaceTypeSelect = (type: string) => {
    setPlaceState((prev) => ({
      ...prev,
      selectedPlaceTypes: prev.selectedPlaceTypes.includes(type)
        ? prev.selectedPlaceTypes.filter((item) => item !== type)
        : [...prev.selectedPlaceTypes, type],
    }));
  };

  const handleBusinessDaySelect = (day: string) => {
    setPlaceState((prev) => ({
      ...prev,
      selectedBusinessDays: prev.selectedBusinessDays.includes(day)
        ? prev.selectedBusinessDays.filter((item) => item !== day)
        : [...prev.selectedBusinessDays, day],
    }));
  };

  const formatBusinessNumber = (raw: string) => {
    if (!/^\d{10}$/.test(raw)) return raw;
    return `${raw.slice(0, 3)}-${raw.slice(3, 5)}-${raw.slice(5)}`;
  };

  const handleCompletePost = (data: any) => {
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
    } else {
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
      businessRegistrationNumber: formatBusinessNumber(
        placeState.businessNumber
      ),
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
    } else {
      const isExit = confirm(
        '입력한 정보가 모두 초기화됩니다. 정말 나가시겠습니까?'
      );
      if (isExit) {
        setPlaceState(initialPlaceState);
        setRoomList([]);
        navigate('/spaceOwner/space');
      } else {
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

  return (
    <div className={S.container}>
      <header className={S.header}>
        <ArrowIcon onClick={handleExitClick} />
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
          {placeState.isUpload ? (
            <img
              src={previewUrl}
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
            value={placeState.placeName}
            onChange={(e) =>
              setPlaceState((prev) => ({ ...prev, placeName: e.target.value }))
            }
          />
        </div>

        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>주소</p>
          <div className={S.addressWrapper}>
            <input
              className={S.placeNameInput}
              disabled
              value={placeState.postCode}
              onChange={(e) =>
                setPlaceState((prev) => ({ ...prev, postCode: e.target.value }))
              }
            />
            <button
              className={S.findAddressBtn}
              onClick={() =>
                setPlaceState((prev) => ({
                  ...prev,
                  isFindAddressClick: !prev.isFindAddressClick,
                }))
              }
            >
              주소 찾기
            </button>
          </div>
          {placeState.isFindAddressClick && (
            <DaumPostcodeEmbed onComplete={handleCompletePost} />
          )}
          {placeState.address && (
            <>
              <div className={S.address}>{placeState.address}</div>
              <input
                className={S.placeNameInput}
                placeholder="상세 주소를 입력해주세요"
                value={placeState.detailAddress}
                onChange={(e) =>
                  setPlaceState((prev) => ({
                    ...prev,
                    detailAddress: e.target.value,
                  }))
                }
              />
            </>
          )}
        </div>

        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>사업자 등록 번호</p>
          <input
            className={S.placeNameInput}
            placeholder="예: 1234567890"
            maxLength={10}
            type="number"
            value={placeState.businessNumber}
            onChange={(e) =>
              setPlaceState((prev) => ({
                ...prev,
                businessNumber: e.target.value,
              }))
            }
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
                selected={placeState.selectedPlaceTypes.includes(label)}
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
                key={day.label}
                label={day.label}
                selected={placeState.selectedBusinessDays.includes(day.value)}
                onClick={() => handleBusinessDaySelect(day.value)}
              />
            ))}
          </div>
        </div>

        <div className={S.dividerLine} />

        <BusinessTime
          selectedTimes={placeState.selectedTimes}
          setSelectedTimes={(selectedTimes) => {
            if (typeof selectedTimes === 'function') {
              setPlaceState((prev) => ({
                ...prev,
                selectedTimes: selectedTimes(prev.selectedTimes),
              }));
            } else {
              setPlaceState((prev) => ({
                ...prev,
                selectedTimes,
              }));
            }
          }}
        />

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

          {roomList.length > 0 ? (
            roomList.map((room) => (
              <RoomItem
                key={room.name}
                roomname={room.name}
                price={room.price}
                description={room.description}
                imgUrl={URL.createObjectURL(room.image)}
                onClick={() => {}}
              />
            ))
          ) : (
            <div className={S.roomPlaceholder}>
              <div className={S.roomPlaceholderTextWrapper}>
                <p className={S.noRoomText}>추가된 방이 없습니다!</p>
              </div>
            </div>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          color="primary"
          onClick={onCreateBtnClick}
          disabled={isCreating}
        >
          {isCreating ? '장소 생성 중...' : '장소 등록'}
        </Button>
      </div>

      <NavigationBar />
    </div>
  );
}
