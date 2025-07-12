import React, { useRef, useState } from 'react';
import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { BusinessDay } from '@/features/spaceOwner/CreateSpace/components/BusinessDay';
import { PlaceType } from '@/features/spaceOwner/CreateSpace/components/PlaceType';
import { AddIcon, ArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import RoomItem from '@/components/RoomItem';
import BusinessTime from '@/features/spaceOwner/CreateSpace/components/BusinessTime';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { CreateRoomType, SelectedTimeType } from '@/shared/types';
import { useAtom } from 'jotai/index';
import { createRoomAtom } from '@/shared/store/createRoomAtom';
import { useCreatePlace } from '@/features/spaceOwner/services/spaceOwner.mutation';

export default function CreateSpace() {
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
  const navigate = useNavigate();
  const [isUpload, setIsUpload] = useState(false);
  const [uploadImage, setUploadImage] = useState<File | null>(null);
  const previewUrl = uploadImage ? URL.createObjectURL(uploadImage) : '';
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState<string[]>([]);
  const [selectedBusinessDays, setSelectedBusinessDays] = useState<string[]>(
    []
  );
  const [isFindAddressClick, setIsFindAddressClick] = useState(false);
  const [placeName, setPlaceName] = useState<string>('');
  const [postCode, setPostCode] = useState<string>('');
  const [businessNumber, setBusinessNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [selectedTimes, setSelectedTimes] = useState<{
    open: SelectedTimeType;
    close: SelectedTimeType;
  }>({
    open: { hour: '00', minute: '00' },
    close: { hour: '00', minute: '00' },
  });
  const [roomList] = useAtom(createRoomAtom);
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: createPlaceMutate } = useCreatePlace();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadImage(file);
      setIsUpload(true);
    }
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

  const formatBusinessNumber = (raw: string) => {
    if (!/^\d{10}$/.test(raw)) return raw;
    return `${raw.slice(0, 3)}-${raw.slice(3, 5)}-${raw.slice(5)}`;
  };

  const onCreateBtnClick = async () => {
    const formData = new FormData();

    if (uploadImage) {
      formData.append('placeImage', uploadImage);
    } else {
      alert('이미지를 등록해주세요');
      return;
    }

    roomList.forEach((room: CreateRoomType) => {
      if (room.image) {
        formData.append('roomImages', room.image);
      }
    });

    const placeData = {
      name: placeName,
      type: selectedPlaceTypes,
      businessRegistrationNumber: formatBusinessNumber(businessNumber),
      businessDays: selectedBusinessDays,
      address: `${address} (${detailAddress})`,
      openTime: `${selectedTimes.open.hour}:${selectedTimes.open.minute}`,
      closeTime: `${selectedTimes.close.hour}:${selectedTimes.close.minute}`,
      image: null, // 서버에서 채워줄 필드
    };

    const roomData = roomList.map((room) => ({
      name: room.name,
      description: room.description,
      additionalDescription: room.additionalDescription,
      price: room.price,
      image: null, // 서버에서 채워줄 필드
    }));

    const dto = {
      place: placeData,
      rooms: roomData,
    };

    formData.append('dto', JSON.stringify(dto));

    createPlaceMutate(formData, {
      onSuccess: () => {
        alert('장소를 생성하였습니다.');
        navigate('/spaceOwner/space');
      },
    });
  };

  const handleCompletePost = (data: any) => {
    setAddress(data.address);
    setPostCode(data.zonecode);
    setIsFindAddressClick(false);
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
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
          />
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>주소</p>
          <div className={S.addressWrapper}>
            <input
              className={S.placeNameInput}
              placeholder=""
              disabled
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
            <button
              className={S.findAddressBtn}
              onClick={() => setIsFindAddressClick(!isFindAddressClick)}
            >
              주소 찾기
            </button>
          </div>
          {isFindAddressClick && (
            <DaumPostcodeEmbed onComplete={handleCompletePost} />
          )}

          {address && (
            <>
              <div className={S.address}>{address}</div>
              <input
                className={S.placeNameInput}
                placeholder="상세 주소를 입력해주세요"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
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
            value={businessNumber}
            onChange={(e) => setBusinessNumber(e.target.value)}
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
                key={day.label}
                label={day.label}
                selected={selectedBusinessDays.includes(day.value)}
                onClick={() => handleBusinessDaySelect(day.value)}
              />
            ))}
          </div>
        </div>
        <div className={S.dividerLine} />
        <BusinessTime
          selectedTimes={selectedTimes}
          setSelectedTimes={setSelectedTimes}
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
          {roomList.length !== 0 ? (
            <>
              {roomList.map((room: CreateRoomType) => (
                <RoomItem
                  roomname={room.name}
                  price={room.price}
                  description={room.description}
                  imgUrl={URL.createObjectURL(room.image)}
                  onClick={() => {}}
                />
              ))}
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
        <Button
          type="submit"
          size="lg"
          color="primary"
          onClick={onCreateBtnClick}
        >
          장소 등록
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
