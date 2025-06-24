import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ReservationData } from '@/shared/libs/reservationData';

export default function Reservations() {
  return (
    <div className={S.container}>
      <header className={S.header}>
        <p className={S.headerText}>예약 리스트</p>
      </header>
      <div className={S.reservationsContainer}>
        {ReservationData.map((reservation) => {
          return (
            <div className={S.dayReservationContainer}>
              <p className={S.date}>{reservation.date}</p>
              {reservation.items.map((item) => {
                return (
                  <div className={S.reservationInfoWrapper}>
                    <p className={S.reservationInfo}>{item.spaceName}</p>
                    <p className={S.reservationInfo}>{item.timeRange}</p>
                    <p className={S.reservationInfo}>{item.userName}</p>
                    <p className={S.reservationInfo}>{item.price}</p>
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
