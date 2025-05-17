import * as S from './style.css';
import PerformanceCard from '@/components/DashboardCard';

export default function UpcomingPerformances() {
  return (
    <div className={S.upcomingPerformanceContainer}>
      <p className={S.titleText}>곧 열리는 공연</p>
      <div className={S.upcomingPerformanceCardWrapper}>
        <PerformanceCard
          type="upcoming"
          image="https://picsum.photos/200"
          artist="한로로"
          stateText="1"
        />
      </div>
    </div>
  );
}
