import * as S from './style.css';

interface PerformanceItemProps {
  image: string;
  title: string;
  artist: string;
  price: number;
}

export default function PerformanceItem({
  image,
  title,
  artist,
  price,
}: PerformanceItemProps) {
  return (
    <div className={S.performanceItemContainer}>
      <img className={S.performanceImg} src={image} />
      <div className={S.textWrapper}>
        <p className={S.title}>{title}</p>
        <p className={S.artist}>{artist}</p>
      </div>
      <p className={S.price}>{price}원</p>
    </div>
  );
}
