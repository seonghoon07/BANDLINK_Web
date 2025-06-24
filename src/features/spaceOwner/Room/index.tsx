import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { ArrowIcon, SpaceImage } from '@/assets';
import { useNavigate } from 'react-router-dom';

export default function Room() {
  const navigate = useNavigate();
  return (
    <div className={S.container}>
      <div className={S.contentContainer}>
        <header className={S.header}>
          <ArrowIcon onClick={() => navigate(-1)} />
        </header>
        <div className={S.roomInfoContainer}>
          <img className={S.rooomImage} src={SpaceImage} alt="방 이미지" />
          <div className={S.mainInfoWrapper}>
            <p className={S.roomName}>[ROOM X] 합주실 1</p>
            <p className={S.roomDescription}>
              설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다
            </p>
            <p className={S.roomPrice}>
              14,000원 <span className={S.lightText}>/ 시간</span>
            </p>
          </div>
          <div className={S.dividerLine} />
          <div className={S.categoryContainer}>
            <p className={S.categoryLabel}>휴무일</p>
            <p className={S.restDay}>
              매주 <span className={S.redColor}>토, 일</span> 제외 24시간 영업
            </p>
          </div>
          <div className={S.dividerLine} />
          <div className={S.categoryContainer}>
            <p className={S.categoryLabel}>부가 설명</p>
            <div className={S.additionalDescriptionBox}>
              <p className={S.additionalDescription}>부가설명입니다.</p>
            </div>
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
