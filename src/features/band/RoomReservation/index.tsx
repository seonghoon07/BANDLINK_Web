import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate, useParams } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import TimeSlot from '@/features/band/RoomReservation/components/TimeSlot';
import Button from '@/components/common/Button';
import {
  useRoomDetails,
  useUnavailableDates,
} from '@/features/band/services/band.query';
import { useState } from 'react';
import { useRoomReserveMutation } from '@/features/band/services/band.mutation';

export default function RoomReservation() {
  const today = new Date().toISOString().split('T')[0];
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [selectedRange, setSelectedRange] = useState<[number, number] | null>(
    null
  );
  const [dateInfo, setDateInfo] = useState({
    roomId: Number(roomId),
    year: today.split('-')[0],
    month: today.split('-')[1],
  });
  const { data: roomDetails } = useRoomDetails(roomId!);
  const { mutate: roomReserveMutate } = useRoomReserveMutation();
  const { data: unavailableDates = [] } = useUnavailableDates(dateInfo);

  const buildRoomReserveBody = (
    date: string,
    range: [number, number] | null,
    unitPrice: number
  ): { startDate: string; endDate: string; price: number } | null => {
    if (!range) return null;

    const [start, end] = range;
    const pad = (n: number) => String(n).padStart(2, '0');

    const startDateTime = `${date}T${pad(start)}:00:00+09:00`;
    const endDateTime = `${date}T${pad(end)}:59:59+09:00`;

    const hourCount = end - start + 1;
    const totalPrice = unitPrice * hourCount;

    return {
      startDate: startDateTime,
      endDate: endDateTime,
      price: totalPrice,
    };
  };

  const onReserveBtnClick = () => {
    const roomReserveBody = buildRoomReserveBody(
      selectedDate,
      selectedRange,
      roomDetails.price
    );

    if (!selectedRange) {
      alert('예약 시간을 선택해주세요.');
      return;
    }

    if (!roomId) {
      alert('유효하지 않은 방입니다.');
      return;
    }

    const isReserve = confirm('정말로 예약하시겠습니까?');

    if (isReserve) {
      roomReserveMutate(
        { roomId, body: roomReserveBody },
        {
          onSuccess: () => {
            alert('성공적으로 예약되었습니다.');
            navigate(-1);
          },
        }
      );
    }
  };

  return (
    <div className={S.roomResevationContainer}>
      <header className={S.roomReservationHeader}>
        <ArrowIcon onClick={() => navigate(-1)} />
      </header>
      <div className={S.contentContainer}>
        {roomDetails && (
          <>
            <img className={S.roomImg} src={roomDetails.imageUrl} />
            <div className={S.roomInfoWrapper}>
              <p className={S.roomName}>{roomDetails.name}</p>
              <p className={S.description}>{roomDetails.description}</p>
              <p className={S.price}>
                {roomDetails.price.toLocaleString()}
                <span className={S.thinText}>원 / 시간</span>
              </p>
            </div>
            <div className={S.deviderLine} />
            <div>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                unavailableDates={unavailableDates || []}
                setDateInfo={setDateInfo}
              />
            </div>
            <div className={S.deviderLine} />
            <TimeSlot
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
            />
            <div className={S.deviderLine} />
            <div className={S.subDescriptionContainer}>
              <p className={S.subDescriptionTitle}>부가설명</p>
              <div className={S.subDescription}>
                {roomDetails.additionDescription}
              </div>
            </div>
            <div className={S.deviderLine} />
            <Button
              size="lg"
              type="submit"
              color="primary"
              onClick={onReserveBtnClick}
            >
              예매하기
            </Button>
          </>
        )}
      </div>
      <NavigationBar />
    </div>
  );
}
