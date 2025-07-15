import * as S from './style.css';
import LivePerformanceCard from '@/components/DashboardCard';
import { usePlaces } from '@/features/band/services/band.query';
import { PlaceType } from '@/shared/types/placeType';
import { useNavigate } from 'react-router-dom';

export default function RecommendPlace() {
  const { data: places } = usePlaces();
  const navigate = useNavigate();
  return (
    <div className={S.livePerformanceContainer}>
      <p className={S.titleText}>추천 대관 장소</p>
      <div className={S.livePerformanceCardWrapper}>
        {places?.map((place: PlaceType) => {
          if (place.isRecommended) {
            return (
              <LivePerformanceCard
                key={place.id}
                type="place"
                image={place.imageUrl}
                title={place.name}
                stateText={place.address}
                onClick={() => navigate(`/band/place/${place.id}`)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
