import * as S from './style.css';
import LivePerformanceCard from '@/components/LivePerformanceCard';

export default function LivePerformance() {
  return (
    <div className={S.livePerformanceContainer}>
      <p className={S.titleText}>실시간 인기 공연</p>
      <div className={S.livePerformanceCardWrapper}>
        <LivePerformanceCard
          image="https://picsum.photos/200"
          artist="해서웨이"
          reserving={800}
        />
        <LivePerformanceCard
          image="https://picsum.photos/200"
          artist="해서웨이"
          reserving={800}
        />
        <LivePerformanceCard
          image="https://picsum.photos/200"
          artist="해서웨이"
          reserving={800}
        />
        <LivePerformanceCard
          image="https://picsum.photos/200"
          artist="해서웨이"
          reserving={800}
        />
      </div>
    </div>
  );
}
