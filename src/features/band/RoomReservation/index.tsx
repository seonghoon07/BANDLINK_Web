import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate, useParams } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import TimeSlot from '@/features/band/RoomReservation/components/TimeSlot';
import Button from '@/components/common/Button';
import { useRoomDetails } from '@/features/band/services/band.query';

export default function RoomReservation() {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const { data: roomDetails } = useRoomDetails(roomId!);

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
              <Calendar />
            </div>
            <div className={S.deviderLine} />
            <TimeSlot />
            <div className={S.deviderLine} />
            <div className={S.subDescriptionContainer}>
              <p className={S.subDescriptionTitle}>부가설명</p>
              <div className={S.subDescription}>
                {roomDetails.additionDescription}
              </div>
            </div>
            <div className={S.deviderLine} />
            <Button size="lg" type="submit" color="primary">
              예매하기
            </Button>
          </>
        )}
      </div>
      <NavigationBar />
    </div>
  );
}
