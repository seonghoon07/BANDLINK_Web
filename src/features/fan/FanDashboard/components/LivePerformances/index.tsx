import * as S from './style.css';
import LivePerformanceCard from '@/components/DashboardCard';
import { usePerformances } from '@/features/fan/services/fan.query';

export default function LivePerformances() {
  const { data: performances } = usePerformances();
  return (
    <div className={S.livePerformanceContainer}>
      <p className={S.titleText}>실시간 인기 공연</p>
      <div className={S.livePerformanceCardWrapper}>
        {performances?.map((i: any) => {
          return (
            <LivePerformanceCard
              key={i.id}
              type={'live'}
              image={i.posterUrl}
              artist={i.title}
              stateText={'800'}
            />
          );
        })}
      </div>
    </div>
  );
}
