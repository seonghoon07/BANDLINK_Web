import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate, useParams } from 'react-router-dom';
import RoomItem from '@/components/RoomItem';
import { usePlaceDetails } from '@/features/band/services/band.query';
import { RoomType } from '@/shared/types/roomType';
import { useEffect } from 'react';
import { saveRecentPlaces } from '@/shared/utils/saveRecentPlace';

export default function PlaceDetail() {
  const navigate = useNavigate();
  const { placeId } = useParams<{ placeId: string }>();
  const { data: placeDetails } = usePlaceDetails(placeId!);

  useEffect(() => {
    if (placeDetails) {
      saveRecentPlaces({
        id: placeDetails.id,
        name: placeDetails.name,
        address: placeDetails.address,
        imageUrl: placeDetails.imageUrl,
      });
    }
  }, [placeDetails]);

  return (
    <div className={S.placeDetailContainer}>
      <header className={S.placeDetailHeader}>
        <ArrowIcon onClick={() => navigate(-1)} />
      </header>
      <div className={S.placeDetailContent}>
        {placeDetails && (
          <>
            <img
              className={S.placeImage}
              src={placeDetails.imageUrl}
              alt="장소 이미지"
            />
            <div className={S.placeInfo}>
              <p className={S.placename}>{placeDetails.name}</p>
              <p className={S.address}>{placeDetails.address}</p>
            </div>
            <div className={S.roomList}>
              {placeDetails.rooms.map((room: RoomType) => (
                <RoomItem
                  key={room.id}
                  roomname={room.name}
                  price={room.price}
                  description={room.description}
                  imgUrl={room.imageUrl}
                  onClick={() =>
                    navigate(
                      `/band/place/${placeDetails.id}/room/${room.id}/reserve`
                    )
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>
      <NavigationBar />
    </div>
  );
}
