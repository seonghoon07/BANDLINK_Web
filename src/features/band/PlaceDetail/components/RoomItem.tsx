import * as S from '../style.css';

interface RoomItemProps {
  roomname: string;
  price: number;
  description: string;
  imgUrl: string;
}

export default function RoomItem({
  roomname,
  price,
  description,
  imgUrl,
}: RoomItemProps) {
  return (
    <div className={S.roomContainer}>
      <div className={S.roomInfoWrapper}>
        <p className={S.roomname}>{roomname}</p>
        <p className={S.price}>
          <span className={S.priceBold}>{price.toLocaleString()}</span>원
        </p>
        <p className={S.roomDescription}>{description}</p>
      </div>
      <img className={S.roomImg} src={imgUrl} />
    </div>
  );
}
