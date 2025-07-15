import * as S from './style.css';
import PerformanceCard from '@/components/DashboardCard';
import { PlaceType } from '@/shared/types/placeType';
import { useNavigate } from 'react-router-dom';

export default function RecentPlace() {
  const navigate = useNavigate();
  const recentPlaces = JSON.parse(
    localStorage.getItem('recent_places') || '[]'
  );
  return (
    <div className={S.upcomingPerformanceContainer}>
      <p className={S.titleText}>최근 본 장소</p>
      <div className={S.upcomingPerformanceCardWrapper}>
        {recentPlaces.map((place: PlaceType) => (
          <PerformanceCard
            key={place.id}
            type="place"
            image={place.imageUrl}
            title={place.name}
            stateText={place.address}
            onClick={() => navigate(`/band/place/${place.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
