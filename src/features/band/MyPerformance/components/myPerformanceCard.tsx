import * as S from '../style.css';

interface MyPerformanceCardProps {
  imageSrc: string;
  name: string;
  startTime: string;
  location: string;
  price: string;
}

export default function MyPerformanceCard({
  imageSrc,
  name,
  startTime,
  location,
  price,
}: MyPerformanceCardProps) {
  return (
    <div className={S.myPerformnaceCardContainer}>
      <img
        className={S.performanceCardImage}
        src={imageSrc}
        alt="공연 이미지"
      />
      <div className={S.categories}>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>이름</p>
          <p className={S.categoryValue}>{name}</p>
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>시작 시간</p>
          <p className={S.categoryValue}>{startTime}</p>
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>장소</p>
          <p className={S.categoryValue}>{location}</p>
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>가격</p>
          <p className={S.categoryValue}>{price}</p>
        </div>
        <div className={S.categoryContainer}>
          <p className={S.categoryLabel}>장소 상태</p>
          <p className={S.categoryValue}>예약 완료</p>
        </div>
      </div>
    </div>
  );
}
