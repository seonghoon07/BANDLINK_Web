import * as S from './style.css';
import LivePerformanceCard from '@/components/DashboardCard';
import { usePerformances } from '@/features/fan/services/fan.query';
import { PerformanceType } from '@/shared/types/performanceType';
import { useNavigate } from 'react-router-dom';

export default function LivePerformances() {
  const navigate = useNavigate();
  const { data: performances } = usePerformances();
  return (
    <div className={S.livePerformanceContainer}>
      <p className={S.titleText}>실시간 인기 공연</p>
      <div className={S.livePerformanceCardWrapper}>
        {performances?.length > 0 ? (
          performances?.map((i: PerformanceType) => {
            return (
              <LivePerformanceCard
                onClick={() => navigate(`/fan/performances/${i.id}`)}
                key={i.id}
                type={'live'}
                image={i.posterUrl}
                title={i.title}
                stateText={'N'}
              />
            );
          })
        ) : (
          <div className={S.noLiveContainer}>
            <p className={S.noLiveText}>실시간 인기 공연이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
