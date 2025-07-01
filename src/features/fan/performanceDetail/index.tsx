import * as S from './style.css';
import { ArrowIcon } from '@/assets';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@/components/common/Button';
import NavigationBar from '@/components/layout/NavigationBar';
import { usePerformanceDetail } from '@/features/fan/services/fan.query';
import { formatPerformanceDate } from '@/shared/libs/formatDate';

export default function PerformanceDetail() {
  const navigate = useNavigate();
  const { performanceId } = useParams<{ performanceId: string }>();
  const numberPerformanceId = Number(performanceId);
  const { data: performanceDetail } = usePerformanceDetail(numberPerformanceId);

  return (
    <div className={S.container}>
      <div className={S.contentContainer}>
        <div className={S.performanceContentContainer}>
          <div className={S.headerContainer}>
            <ArrowIcon width={24} height={24} onClick={() => navigate(-1)} />
          </div>
          <img
            className={S.performanceImg}
            src={performanceDetail?.posterUrl}
            alt="공연 이미지"
          />
          <div className={S.infoContainer}>
            <div className={S.nameAndArtistWrapper}>
              <p className={S.performanceName}>{performanceDetail?.title}</p>
              <p className={S.artist}>{performanceDetail?.bandname}</p>
            </div>
            <div className={S.categoryContainer}>
              <p className={S.categoryName}>소개</p>
              <p className={S.categoryContent}>
                {performanceDetail?.description}
              </p>
            </div>
            <div className={S.categoryContainer}>
              <p className={S.categoryName}>장소</p>
              <p className={S.categoryContent}>{performanceDetail?.address}</p>
            </div>
            <div className={S.categoryContainer}>
              <p className={S.categoryName}>기간</p>
              <p className={S.categoryContent}>
                {formatPerformanceDate(
                  performanceDetail?.start_time,
                  performanceDetail?.end_time
                )}
              </p>
            </div>
            <div className={S.categoryContainer}>
              <p className={S.categoryName}>가격</p>
              <p className={S.categoryContent}>
                <span className={S.price}>
                  {performanceDetail?.price.toLocaleString()}원
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={S.reserveBtnContainer}>
          <Button type="button" color="primary" size="lg">
            예매하기
          </Button>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
