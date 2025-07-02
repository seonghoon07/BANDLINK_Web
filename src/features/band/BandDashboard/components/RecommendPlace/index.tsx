import * as S from './style.css';
import LivePerformanceCard from '@/components/DashboardCard';
import { usePlaces } from '@/features/band/services/band.query';

export default function RecommendPlace() {
  const { data: places } = usePlaces();
  return (
    <div className={S.livePerformanceContainer}>
      <p className={S.titleText}>추천 대관 장소</p>
      <div className={S.livePerformanceCardWrapper}>
        {places?.map((place: any) => {
          if (place.isRecommended) {
            return (
              <LivePerformanceCard
                type="place"
                image={place.imageUrl}
                title={place.name}
                stateText={place.address}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
