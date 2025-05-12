import * as S from '@/features/user/Profile/style.css';

interface InfoSummaryCardProps {
  type: string;
  point: number;
  coupon: number;
}

export default function InfoSummaryCard({
  type,
  point,
  coupon,
}: InfoSummaryCardProps) {
  return (
    <div className={S.infoSummaryCard}>
      <div className={S.infoSummaryItem}>
        <p className={S.summaryLable}>유형</p>
        <p className={S.summaryText}>{type}</p>
      </div>
      <div className={S.infoSummaryItem}>
        <p className={S.summaryLable}>포인트</p>
        <p className={S.summaryText}>{point}</p>
      </div>
      <div className={S.infoSummaryItem}>
        <p className={S.summaryLable}>쿠폰</p>
        <p className={S.summaryText}>{coupon}</p>
      </div>
    </div>
  );
}
