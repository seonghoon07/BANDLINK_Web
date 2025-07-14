import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon } from '@/assets';
import { useNavigate, useParams } from 'react-router-dom';
import { useRoomDetail } from '@/features/spaceOwner/services/spaceOwner.query';
import { getKoreanOffDays } from '@/shared/utils/restDay';

export default function Room() {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const { data: room } = useRoomDetail(roomId!);
  const offDays = room?.businessDays
    ? getKoreanOffDays(room.businessDays).join(', ')
    : '';
  return (
    <div className={S.container}>
      <div className={S.contentContainer}>
        <header className={S.header}>
          <ArrowIcon onClick={() => navigate(-1)} />
        </header>
        <div className={S.roomInfoContainer}>
          <img className={S.rooomImage} src={room?.imageUrl} alt="방 이미지" />
          <div className={S.mainInfoWrapper}>
            <p className={S.roomName}>{room?.name}</p>
            <p className={S.roomDescription}>{room?.description}</p>
            <p className={S.roomPrice}>
              {room?.price.toLocaleString()}{' '}
              <span className={S.lightText}>/ 시간</span>
            </p>
          </div>
          <div className={S.dividerLine} />
          <div className={S.categoryContainer}>
            <p className={S.categoryLabel}>휴무일</p>
            <p className={S.restDay}>
              매주 <span className={S.redColor}>{offDays}</span> 제외 24시간
              영업
            </p>
          </div>
          <div className={S.dividerLine} />
          <div className={S.categoryContainer}>
            <p className={S.categoryLabel}>부가 설명</p>
            <div className={S.additionalDescriptionBox}>
              <p className={S.additionalDescription}>
                {room?.additionDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
