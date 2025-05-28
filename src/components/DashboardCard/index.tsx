import * as S from './style.css';

interface PerformanceCardProps {
  type: 'place' | 'live' | 'upcoming';
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
  const renderStateText = () => {
    if (type === 'place') {
      return <p className={S.stateText}>{stateText}</p>;
    }

    if (type === 'live') {
      return <p className={S.stateText}>{stateText}명 예매중</p>;
    }

    return <p className={S.stateText}>{stateText}일 후</p>;
  };

  return (
    <div className={S.livePerformanceCard}>
      <img className={S.performanceImg} src={image} alt="공연 이미지" />
      <div className={S.textWrapper}>
        <p className={S.artistName}>{artist}</p>
        {renderStateText()}
      </div>
    </div>
  );
}
