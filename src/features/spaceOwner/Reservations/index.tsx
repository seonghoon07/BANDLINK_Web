import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { useMyRoomReservation } from '@/features/spaceOwner/services/spaceOwner.query';
import { DailyReservation } from '@/shared/types/myRoomReservationType';
import { formatDateToKorean } from '@/shared/utils/formatDateToKorean';

export default function Reservations() {
  const { data: reservations } = useMyRoomReservation();
  return (
    <div className={S.container}>
      <header className={S.header}>
        <p className={S.headerText}>예약 리스트</p>
      </header>
      <div className={S.reservationsContainer}>
        {reservations?.map((daily: DailyReservation) => {
          return (
            <div className={S.dayReservationContainer}>
              <p className={S.date}>{formatDateToKorean(daily.date)}</p>
              {daily?.reservations?.map((item) => {
                return (
                  <div className={S.reservationInfoWrapper}>
                    <p className={S.reservationInfo}>{item.roomName}</p>
                    <p className={S.reservationInfo}>
                      {item.startTime} ~ {item.endTime}
                    </p>
                    <p className={S.reservationInfo}>{item.userName}</p>
                    <p className={S.reservationInfo}>
                      {item.price.toLocaleString()}원
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <NavigationBar />
    </div>
  );
}
