import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';

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
        <div className={S.calendarLayout}>
          <Calendar />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
