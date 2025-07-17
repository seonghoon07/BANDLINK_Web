import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import Header from '@/components/layout/Header';
import {
  useMyPlace,
  useReserveInfo,
  useRevenue,
} from '@/features/spaceOwner/services/spaceOwner.query';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const { data: reservationInfo } = useReserveInfo();
  const { data: revenue } = useRevenue();
  const { data: place } = useMyPlace();

  const formatToAmPmHour = (isoString: string) => {
    const date = new Date(isoString);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours < 12 ? '오전' : '오후';
    const hour = hours % 12 === 0 ? 12 : hours % 12;
    const paddedMinutes = String(minutes).padStart(2, '0');
    return `${period} ${hour}시 ${paddedMinutes}분`;
  };

  const formatRawTimeToAmPm = (time: string) => {
    const [hourStr, minuteStr] = time.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    const period = hour < 12 ? '오전' : '오후';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const paddedMinute = String(minute).padStart(2, '0');
    return `${period} ${formattedHour}시 ${paddedMinute}분`;
  };

  const difference =
    revenue !== undefined
      ? revenue.currentRevenue - revenue.lastMonthRevenue
      : undefined;

  const diffClassName =
    difference === undefined
      ? S.yellowColor
      : difference > 0
        ? S.redColor
        : difference < 0
          ? S.blueColor
          : S.yellowColor;

  const diffText =
    difference === undefined
      ? '-'
      : `${difference > 0 ? '+' : ''}${difference.toLocaleString()}원`;

  return (
    <div className={S.container}>
      <Header />

      <div className={S.contentContainer}>
        <div className={S.todayReservationContainer}>
          <p className={S.todayReservation}>
            오늘은 {reservationInfo?.count ?? 0}건의 예약이 있습니다.
          </p>

          <div className={S.reservationTimeContainer}>
            <div className={S.reservationTimeWrapper}>
              <p className={S.timeLabel}>첫 입실 시간</p>
              <p className={S.timeValue}>
                {reservationInfo?.firstEnterTime
                  ? formatToAmPmHour(reservationInfo.firstEnterTime)
                  : reservationInfo === undefined
                    ? '로딩 중...'
                    : '예정된 예약 없음'}
              </p>
            </div>

            <div className={S.reservationTimeWrapper}>
              <p className={S.timeLabel}>마지막 퇴실 시간</p>
              <p className={S.timeValue}>
                {reservationInfo?.lastLeaveTime
                  ? formatToAmPmHour(reservationInfo.lastLeaveTime)
                  : reservationInfo === undefined
                    ? '로딩 중...'
                    : '예정된 예약 없음'}
              </p>
            </div>
          </div>
        </div>

        <div className={S.revenueBox}>
          <div className={S.monthRevenueWrapper}>
            <p className={S.categoryLabel}>이번 달 누적 수익</p>
            <p className={S.categoryValue}>
              {revenue ? `${revenue.currentRevenue.toLocaleString()}원` : '-'}
            </p>
          </div>

          <div className={S.monthRevenueWrapper}>
            <p className={S.categoryLabel}>지난 달 대비</p>
            <p className={S.categoryValue}>
              <span className={diffClassName}>{diffText}</span>
            </p>
          </div>
        </div>

        <div className={S.mySpaceContainer}>
          <p className={S.mySpaceTitle}>내 공간</p>

          {place === undefined ? (
            <div className={S.emptySpaceWrapper}>
              <p className={S.emptyText}>장소를 불러오는 중입니다...</p>
            </div>
          ) : place === null ? (
            <div className={S.emptySpaceWrapper}>
              <p className={S.emptyText}>등록된 장소가 없습니다!</p>
            </div>
          ) : (
            <div
              className={S.mySpaceWrapper}
              onClick={() => navigate('/spaceOwner/space')}
            >
              <img
                className={S.spaceImage}
                alt="장소 이미지"
                src={place.imageUrl}
              />
              <div className={S.spaceInfoWrapper}>
                <p className={S.placeName}>{place.name}</p>
                <p className={S.placeAddress}>{place.address}</p>
                <p className={S.businessHours}>
                  {formatRawTimeToAmPm(place.openTime)} ~{' '}
                  {formatRawTimeToAmPm(place.closeTime)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
