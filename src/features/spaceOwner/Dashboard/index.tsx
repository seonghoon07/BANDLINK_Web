import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import Header from '@/components/layout/Header';
import { SpaceData } from '@/shared/libs/spaceData';

export default function Dashboard() {
  return (
    <div className={S.container}>
      <Header />
      <div className={S.contentContainer}>
        <div className={S.todayReservationContainer}>
          <p className={S.todayReservation}>오늘은 0건의 예약이 있습니다.</p>
          <div className={S.reservationTimeContainer}>
            <div className={S.reservationTimeWrapper}>
              <p className={S.timeLabel}>첫 입실 시간</p>
              <p className={S.timeValue}>예약 정보 없음</p>
            </div>
            <div className={S.reservationTimeWrapper}>
              <p className={S.timeLabel}>마지막 퇴실 시간</p>
              <p className={S.timeValue}>예약 정보 없음</p>
            </div>
          </div>
        </div>
        <div className={S.revenueBox}>
          <div className={S.monthRevenueWrapper}>
            <p className={S.categoryLabel}>이번 달 누적 수익</p>
            <p className={S.categoryValue}>0원</p>
          </div>
          <div className={S.monthRevenueWrapper}>
            <p className={S.categoryLabel}>지난 달 대비</p>
            <p className={S.categoryValue}>
              <span className={S.yellowColor}>0원</span>
            </p>
          </div>
        </div>
        <div className={S.mySpaceContainer}>
          <p className={S.mySpaceTitle}>내 공간</p>
          {SpaceData.spaceName ? (
            <div className={S.mySpaceWrapper}>
              <img
                className={S.spaceImage}
                alt="장소 이미지"
                src={SpaceData.spaceImage}
              />
              <div className={S.spaceInfoWrapper}>
                <p className={S.placeName}>{SpaceData.spaceName}</p>
                <p className={S.placeAddress}>{SpaceData.spaceAddress}</p>
                <p className={S.businessHours}>{SpaceData.businessHours}</p>
              </div>
            </div>
          ) : (
            <div className={S.emptySpaceWrapper}>
              <p className={S.emptyText}>등록된 장소가 없습니다!</p>
            </div>
          )}
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
