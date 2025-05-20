import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';
import RoomItem from '@/features/band/PlaceDetail/components/RoomItem';

export default function PlaceDetail() {
  const navigate = useNavigate();
  return (
    <div className={S.placeDetailContainer}>
      <header className={S.placeDetailHeader}>
        <ArrowIcon onClick={() => navigate(-1)} />
      </header>
      <div className={S.placeDetailContent}>
        <img className={S.placeImage} src="https://picsum.photos/200" />
        <div className={S.placeInfo}>
          <p className={S.placename}>
            디어뮤직 스튜디오 24시간 무인 음악연습실&합주실
          </p>
          <p className={S.address}>부산 남구 문현동</p>
        </div>
        <div className={S.roomList}>
          <RoomItem
            roomname={'[ROOM X] 합주실 1'}
            price={140000}
            description={'설명입니다'}
            imgUrl={'https://picsum.photos/400'}
          />
          <RoomItem
            roomname={'[ROOM X] 합주실 1'}
            price={140000}
            description={'설명입니다'}
            imgUrl={'https://picsum.photos/400'}
          />
          <RoomItem
            roomname={'[ROOM X] 합주실 1'}
            price={140000}
            description={'설명입니다'}
            imgUrl={'https://picsum.photos/400'}
          />
          <RoomItem
            roomname={'[ROOM X] 합주실 1'}
            price={140000}
            description={'설명입니다'}
            imgUrl={'https://picsum.photos/400'}
          />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
