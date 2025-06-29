import * as S from './style.css';
import PerformanceCard from '@/components/DashboardCard';
import { usePerformances } from '@/features/fan/services/fan.query';
import { PerformanceType } from '@/shared/types/performanceType';

export default function UpcomingPerformances() {
  const { data: performances } = usePerformances();
  const now = new Date();

  const getDaysUntil = (dateString: string): number => {
    const target = new Date(dateString);

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetDay = new Date(
      target.getFullYear(),
      target.getMonth(),
      target.getDate()
    );

    const diffMs = targetDay.getTime() - today.getTime();
    return diffMs / (1000 * 60 * 60 * 24);
  };

  const upcomingPerformances = performances?.filter((performance: any) => {
    const daysUntil = getDaysUntil(performance.startTime);
    return daysUntil >= 0 && daysUntil <= 3;
  });

  return (
    <div className={S.upcomingPerformanceContainer}>
      <p className={S.titleText}>곧 열리는 공연</p>
      <div className={S.upcomingPerformanceCardWrapper}>
        {upcomingPerformances?.map((performance: PerformanceType) => (
          <PerformanceCard
            key={performance.id}
            type="upcoming"
            image={performance.posterUrl}
            artist={performance.title}
            stateText={`${getDaysUntil(performance.startTime)}`}
          />
        ))}
      </div>
    </div>
  );
}
