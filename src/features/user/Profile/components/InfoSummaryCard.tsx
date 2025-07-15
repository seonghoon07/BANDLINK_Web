import * as S from '@/features/user/Profile/style.css';

interface InfoSummaryCardProps {
  type: string;
  point: number;
  coupon: number;
}

const userTypeMap: Record<string, string> = {
  FAN: '팬',
  BAND: '밴드',
  PLACE_OWNER: '장소대여주',
};

export default function InfoSummaryCard({
  type,
  point,
  coupon,
}: InfoSummaryCardProps) {
  return (
    <div className={S.infoSummaryCard}>
      <div className={S.infoSummaryItem}>
        <p className={S.summaryLable}>유형</p>
        <p className={S.summaryText}>{userTypeMap[type]}</p>
      </div>
      <div className={S.infoSummaryItem}>
        <p className={S.summaryLable}>포인트</p>
        <p className={S.summaryText}>{point.toLocaleString()}</p>
      </div>
      <div className={S.infoSummaryItem}>
        <p className={S.summaryLable}>쿠폰</p>
        <p className={S.summaryText}>{coupon.toLocaleString()}</p>
      </div>
    </div>
  );
}
