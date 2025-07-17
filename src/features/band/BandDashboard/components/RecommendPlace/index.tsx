import * as S from './style.css';
import LivePerformanceCard from '@/components/DashboardCard';
import { usePlaces } from '@/features/band/services/band.query';
import { PlaceType } from '@/shared/types/placeType';
import { useNavigate } from 'react-router-dom';

export default function RecommendPlace() {
  const { data: places } = usePlaces();
  const navigate = useNavigate();
  const recommended = (places ?? []).filter((p: PlaceType) => p.isRecommended);
  return (
    <div className={S.livePerformanceContainer}>
      <p className={S.titleText}>추천 대관 장소</p>
      <div className={S.livePerformanceCardWrapper}>
        {recommended.length > 0 ? (
          recommended.map((place: PlaceType) => (
            <LivePerformanceCard
              key={place.id}
              type="place"
              image={place.imageUrl}
              title={place.name}
              stateText={place.address}
              onClick={() => navigate(`/band/place/${place.id}`)}
            />
          ))
        ) : (
          <div className={S.noRecommendedContainer}>
            <p className={S.emptyText}>추천 대관 장소가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
