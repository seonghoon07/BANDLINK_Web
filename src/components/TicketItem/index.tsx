import * as S from './style.css';
import { Ticket } from '@/shared/types/ticket';

type TicketItemProps = Pick<
  Ticket,
  'performanceName' | 'date' | 'address' | 'price' | 'status' | 'imageUrl'
>;

export default function TicketItem({
  performanceName,
  date,
  address,
  price,
  status,
  imageUrl,
}: TicketItemProps) {
  return (
    <div className={S.ticketItemContainer}>
      <img className={S.performanceImg} src={imageUrl} alt="공연 이미지" />
      <div className={S.ticketContentWrapper}>
        <div className={S.infoItem}>
          <p className={S.infoLable}>이름</p>
          <p className={S.infoText}>{performanceName}</p>
        </div>
        <div className={S.infoItem}>
          <p className={S.infoLable}>예매일</p>
          <p className={S.infoText}>{date}</p>
        </div>
        <div className={S.infoItem}>
          <p className={S.infoLable}>장소</p>
          <p className={S.infoText}>{address}</p>
        </div>
        <div className={S.infoItem}>
          <p className={S.infoLable}>가격</p>
          <p className={S.infoText}>{price}</p>
        </div>
        <div className={S.infoItem}>
          <p className={S.infoLable}>상태</p>
          <p className={S.infoText}>{status}</p>
        </div>
      </div>
    </div>
  );
}
