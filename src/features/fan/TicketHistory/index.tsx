import * as S from './style.css';
import TicketItem from '@/components/TicketItem';
import NavigationBar from '@/components/layout/NavigationBar';
import { useReserveHistory } from '@/features/fan/services/fan.query';

export default function TicketHistory() {
  const { data: reserveHistory } = useReserveHistory();
  return (
    <div className={S.container}>
      <div className={S.contentContainer}>
        <header className={S.headerContainer}>
          <p className={S.headerTitle}>티켓 예매 내역</p>
        </header>
        <div className={S.ticketListContainer}>
          {reserveHistory?.map((reserve: any) => (
            <TicketItem
              key={reserve.id}
              performanceName={reserve.title}
              address={reserve.place}
              date={reserve.reservedAt}
              price={reserve.price.toLocaleString()}
              imageUrl={reserve.posterUrl}
              status="예매완료"
            />
          ))}
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
