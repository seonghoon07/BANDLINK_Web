import * as S from './style.css';
import LivePerformanceCard from '@/components/PerformanceCard';

export default function LivePerformances() {
  return (
    <div className={S.livePerformanceContainer}>
      <p className={S.titleText}>실시간 인기 공연</p>
      <div className={S.livePerformanceCardWrapper}>
        <LivePerformanceCard
          type="live"
          image="https://picsum.photos/200"
          artist="해서웨이"
          stateText="800"
        />
        <LivePerformanceCard
          type="live"
          image="https://picsum.photos/200"
          artist="해서웨이"
          stateText="800"
        />
        <LivePerformanceCard
          type="live"
          image="https://picsum.photos/200"
          artist="해서웨이"
          stateText="800"
        />
        <LivePerformanceCard
          type="live"
          image="https://picsum.photos/200"
          artist="해서웨이"
          stateText="800"
        />
      </div>
    </div>
  );
}
