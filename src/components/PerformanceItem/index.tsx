import * as S from './style.css';

interface PerformanceItemProps {
  image: string;
  title: string;
  artist: string;
  price: number;
  onClick?: () => void;
}

export default function PerformanceItem({
  image,
  title,
  artist,
  price,
  onClick,
}: PerformanceItemProps) {
  return (
    <div className={S.performanceItemContainer} onClick={onClick}>
      <div className={S.performanceImgWrapper}>
        <img className={S.performanceImg} alt="앨범 사진" src={image} />
      </div>
      <div className={S.textWrapper}>
        <p className={S.title}>{title}</p>
        <p className={S.artist}>{artist}</p>
      </div>
      <p className={S.price}>{price.toLocaleString()}원</p>
    </div>
  );
}
