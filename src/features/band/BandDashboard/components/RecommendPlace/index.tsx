import * as S from './style.css';
import LivePerformanceCard from '@/components/DashboardCard';

export default function RecommendPlace() {
  return (
    <div className={S.livePerformanceContainer}>
      <p className={S.titleText}>추천 대관 장소</p>
      <div className={S.livePerformanceCardWrapper}>
        <LivePerformanceCard
          type="place"
          image="https://picsum.photos/200"
          artist="음악공연장 롤링홀ㅇㄹㅁㅁㄹ"
          stateText="부산 강서구 봉림동"
        />
        <LivePerformanceCard
          type="place"
          image="https://picsum.photos/200"
          artist="음악공연장 롤링홀ㅇㄹㅁㅁㄹ"
          stateText="부산 강서구 봉림동"
        />
        <LivePerformanceCard
          type="place"
          image="https://picsum.photos/200"
          artist="음악공연장 롤링홀ㅇㄹㅁㅁㄹ"
          stateText="부산 강서구 봉림동"
        />
        <LivePerformanceCard
          type="place"
          image="https://picsum.photos/200"
          artist="음악공연장 롤링홀ㅇㄹㅁㅁㄹ"
          stateText="부산 강서구 봉림동"
        />
      </div>
    </div>
  );
}
