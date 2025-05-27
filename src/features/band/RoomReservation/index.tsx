import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import TimeSlot from '@/features/band/RoomReservation/components/TimeSlot';
import Button from '@/components/common/Button';

export default function RoomReservation() {
  const navigate = useNavigate();

  return (
    <div className={S.roomResevationContainer}>
      <header className={S.roomReservationHeader}>
        <ArrowIcon onClick={() => navigate(-1)} />
      </header>
      <div className={S.contentContainer}>
        <img className={S.roomImg} src="https://picsum.photos/300" />
        <div className={S.roomInfoWrapper}>
          <p className={S.roomName}>[ROOM X] 합주실 1</p>
          <p className={S.description}>
            설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다
          </p>
          <p className={S.price}>
            14,000<span className={S.thinText}>원 / 시간</span>
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
          <div className={S.subDescription}>부가설명입니다</div>
        </div>
        <div className={S.deviderLine} />
        <Button size="lg" type="submit" color="primary">
          예매하기
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
