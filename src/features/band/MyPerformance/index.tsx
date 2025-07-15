import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import MyPerformanceCard from './components/myPerformanceCard';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useMyPerformances } from '@/features/band/services/band.query';
import { formatKoreanDatetime } from '@/shared/utils/date';
import { MyPerformanceType } from '@/shared/types';

export default function MyPerformance() {
  const navigate = useNavigate();
  const { data: myPerformances } = useMyPerformances();
  return (
    <div className={S.myPerformanceContainer}>
      <header className={S.titleHeader}>내 공연</header>
      <div className={S.myPerformnaces}>
        {myPerformances?.map((performance: MyPerformanceType) => (
          <MyPerformanceCard
            key={performance.id}
            imageSrc={performance.posterUrl}
            name={performance.title}
            startTime={formatKoreanDatetime(performance.start_time)}
            location={performance.address}
            price={performance.price}
          />
        ))}
      </div>
      <div className={S.createBtnWrapper}>
        <Button
          size="lg"
          type="button"
          color="primary"
          onClick={() => navigate('/band/performance/create')}
        >
          공연 생성
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
