import * as S from './style.css';
import { Ticket } from '@/shared/types/ticket';

export default function TicketItem({
  title,
  reservedAt,
  place,
  price,
  status,
  posterUrl,
}: Ticket) {
  return (
    <div className={S.ticketItemContainer}>
      <img className={S.performanceImg} src={posterUrl} alt="공연 이미지" />
      <div className={S.ticketContentWrapper}>
        <div className={S.infoItem}>
          <p className={S.infoLable}>이름</p>
          <p className={S.infoText}>{title}</p>
        </div>
        <div className={S.infoItem}>
          <p className={S.infoLable}>예매일</p>
          <p className={S.infoText}>{reservedAt}</p>
        </div>
        <div className={S.infoItem}>
          <p className={S.infoLable}>장소</p>
          <p className={S.infoText}>{place}</p>
        </div>
        <div className={S.infoItem}>
          <p className={S.infoLable}>가격</p>
          <p className={S.infoText}>{price}원</p>
        </div>
        <div className={S.infoItem}>
          <p className={S.infoLable}>상태</p>
          <p className={S.infoText}>{status}</p>
        </div>
      </div>
    </div>
  );
}
