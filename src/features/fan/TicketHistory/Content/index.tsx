import * as S from './style.css';
import TicketItem from '@/components/ticket/TicketItem';
import { ticketList } from '@/shared/libs/ticketItmes';

export default function Content() {
  return (
    <div className={S.contentContainer}>
      <header className={S.headerContainer}>
        <p className={S.headerTitle}>티켓 예매 내역</p>
      </header>
      <div className={S.ticketListContainer}>
        {ticketList.map((item) => (
          <TicketItem
            key={item.id}
            performanceName={item.performanceName}
            address={item.address}
            date={item.date}
            price={item.price}
            imageUrl={item.imageUrl}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}
