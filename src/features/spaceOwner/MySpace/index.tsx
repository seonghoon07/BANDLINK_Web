import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import Button from '@/components/common/Button';
import { SpaceImage } from '@/assets';
import RoomItem from '@/components/RoomItem';

export default function MySpace() {
  return (
    <div className={S.container}>
      <div className={S.contentContainer}>
        <header className={S.headerContainer}>
          <p className={S.headerText}>내 공간</p>
        </header>
        <div className={S.spaceInfoWrapper}>
          <img className={S.spaceImg} alt="장소 이미지" src={SpaceImage} />
          <div className={S.textInfoWrapper}>
            <p className={S.spaceName}>
              디어뮤직 스튜디오 24시간 무인 음악연습실&합주실
            </p>
            <p className={S.spaceAddress}>부산 남구 문현동</p>
            <p className={S.restDay}>
              매주 <span className={S.redColor}>토, 일</span> 휴무
            </p>
          </div>
        </div>
        <div className={S.roomWrapper}>
          <RoomItem
            roomname={'[ROOM X] 합주실 1'}
            price={14000}
            description={
              '설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다'
            }
            imgUrl={SpaceImage}
            onClick={() => {}}
          />
          <RoomItem
            roomname={'[ROOM X] 합주실 1'}
            price={14000}
            description={
              '설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다'
            }
            imgUrl={SpaceImage}
            onClick={() => {}}
          />
          <RoomItem
            roomname={'[ROOM X] 합주실 1'}
            price={14000}
            description={
              '설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다'
            }
            imgUrl={SpaceImage}
            onClick={() => {}}
          />
          <RoomItem
            roomname={'[ROOM X] 합주실 1'}
            price={14000}
            description={
              '설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다'
            }
            imgUrl={SpaceImage}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className={S.fixBtnContainer}>
        <Button type="button" size="lg" color="primary">
          수정하기
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
