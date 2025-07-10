import * as S from './style.css';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/layout/NavigationBar';
import Button from '@/components/common/Button';
import RoomItem from '@/components/RoomItem';
import { useMyPlace } from '@/features/spaceOwner/services/spaceOwner.query';
import { RoomType } from '@/shared/types/roomType';
import { getKoreanOffDays } from '@/shared/utils/restDay';

export default function MySpace() {
  const navigate = useNavigate();
  const { data: place } = useMyPlace();

  const offDays = place?.businessDays
    ? getKoreanOffDays(place.businessDays).join(', ')
    : '';

  return (
    <div className={S.container}>
      <div className={S.contentContainer}>
        <header className={S.headerContainer}>
          <p className={S.headerText}>내 공간</p>
        </header>
        {place ? (
          <>
            <div className={S.spaceInfoWrapper}>
              <img
                className={S.spaceImg}
                alt="장소 이미지"
                src={place?.imageUrl}
              />
              <div className={S.textInfoWrapper}>
                <p className={S.spaceName}>{place.name}</p>
                <p className={S.spaceAddress}>{place.address}</p>
                <p className={S.restDay}>
                  매주 <span className={S.redColor}>{offDays}</span> 휴무
                </p>
              </div>
            </div>
            <div className={S.roomWrapper}>
              {place?.rooms?.map((room: RoomType) => (
                <RoomItem
                  roomname={room.name}
                  price={room.price}
                  description={room.description}
                  imgUrl={room.imageUrl}
                  onClick={() => navigate(`/spaceOwner/space/room/${room.id}`)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className={S.emptyRoomContainer}>
            <p className={S.emptyRoomText}>등록된 공간이 없습니다.</p>
          </div>
        )}
      </div>
      <div className={S.fixBtnContainer}>
        <Button
          type="button"
          size="lg"
          color="primary"
          onClick={() =>
            place
              ? navigate('/spaceOwner/space/create')
              : navigate('/spaceOwner/space/create')
          }
        >
          {place ? '수정하기' : '등록하기'}
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
