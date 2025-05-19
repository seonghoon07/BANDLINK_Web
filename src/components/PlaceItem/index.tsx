import * as S from './style.css';

interface PlaceItemProps {
  imageUrl: string;
  placename: string;
  address: string;
  type: string;
}

export default function PlaceItem({
  imageUrl,
  placename,
  address,
  type,
}: PlaceItemProps) {
  return (
    <div className={S.placeContainer}>
      <img className={S.placeImg} src={imageUrl} alt="장소 이미지" />
      <div className={S.textContainer}>
        <p className={S.placename}>{placename}</p>
        <p className={S.infoText}>{address}</p>
        <p className={S.infoText}>{type}</p>
      </div>
    </div>
  );
}
