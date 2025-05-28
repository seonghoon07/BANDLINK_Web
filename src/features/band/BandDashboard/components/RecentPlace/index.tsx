import * as S from './style.css';
import PerformanceCard from '@/components/DashboardCard';

export default function RecentPlace() {
  return (
    <div className={S.upcomingPerformanceContainer}>
      <p className={S.titleText}>최근 본 장소</p>
      <div className={S.upcomingPerformanceCardWrapper}>
        <PerformanceCard
          type="place"
          image="https://picsum.photos/200"
          artist="음악공연장 롤링홀ㅇㄹㅁㅁㄹ"
          stateText="부산 강서구 봉림동"
        />
      </div>
    </div>
  );
}
