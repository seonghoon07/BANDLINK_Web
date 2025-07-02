import * as S from './style.css';
import PerformanceCard from '@/components/DashboardCard';

export default function RecentPlace() {
  const recentPlaces = JSON.parse(
    localStorage.getItem('recent_places') || '[]'
  );
  return (
    <div className={S.upcomingPerformanceContainer}>
      <p className={S.titleText}>최근 본 장소</p>
      <div className={S.upcomingPerformanceCardWrapper}>
        {recentPlaces.map((place: any) => (
          <PerformanceCard
            type="place"
            image={place.imageUrl}
            title={place.name}
            stateText={place.address}
          />
        ))}
      </div>
    </div>
  );
}
