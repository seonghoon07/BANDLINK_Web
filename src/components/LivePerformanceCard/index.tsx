import * as S from './style.css';

interface LivePerformanceCardProps {
  image: string;
  artist: string;
  reserving: number;
}

export default function LivePerformanceCard({
  image,
  artist,
  reserving,
}: LivePerformanceCardProps) {
  return (
    <div className={S.livePerformanceCard}>
      <img className={S.performanceImg} src={image} alt="공연 이미지" />
      <div className={S.textWrapper}>
        <p className={S.artistName}>{artist}</p>
        <p className={S.reservingAmount}>{reserving}명 예매중</p>
      </div>
    </div>
  );
}
