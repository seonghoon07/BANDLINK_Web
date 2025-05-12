import * as S from './style.css';

interface PerformanceCardProps {
  type: 'live' | 'upcoming';
  image: string;
  artist: string;
  stateText: string;
}

export default function PerformanceCard({
  type,
  image,
  artist,
  stateText,
}: PerformanceCardProps) {
  return (
    <div className={S.livePerformanceCard}>
      <img className={S.performanceImg} src={image} alt="공연 이미지" />
      <div className={S.textWrapper}>
        <p className={S.artistName}>{artist}</p>
        {type === 'live' ? (
          <p className={S.stateText}>{stateText}명 예매중</p>
        ) : (
          <p className={S.stateText}>{stateText}일 후</p>
        )}
      </div>
    </div>
  );
}
