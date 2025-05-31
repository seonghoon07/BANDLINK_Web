import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import MyPerformanceCard from './components/myPerformanceCard';
import { BusanRockFestaImg } from '@/assets';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';

export default function MyPerformance() {
  const navigate = useNavigate();
  return (
    <div className={S.myPerformanceContainer}>
      <header className={S.titleHeader}>내 공연</header>
      <div className={S.myPerformnaces}>
        <MyPerformanceCard
          imageSrc={BusanRockFestaImg}
          name={'집'}
          startTime={'2025.03.21 오후 1시 30분'}
          location={
            '노들섬 라이브하우스 (서울특별시 용산구 양녕로 445 (이촌동)'
          }
          price={'124,000원'}
        />
        <MyPerformanceCard
          imageSrc={BusanRockFestaImg}
          name={'집'}
          startTime={'2025.03.21 오후 1시 30분'}
          location={
            '노들섬 라이브하우스 (서울특별시 용산구 양녕로 445 (이촌동)'
          }
          price={'124,000원'}
        />
        <MyPerformanceCard
          imageSrc={BusanRockFestaImg}
          name={'집'}
          startTime={'2025.03.21 오후 1시 30분'}
          location={
            '노들섬 라이브하우스 (서울특별시 용산구 양녕로 445 (이촌동)'
          }
          price={'124,000원'}
        />
        <MyPerformanceCard
          imageSrc={BusanRockFestaImg}
          name={'집'}
          startTime={'2025.03.21 오후 1시 30분'}
          location={
            '노들섬 라이브하우스 (서울특별시 용산구 양녕로 445 (이촌동)'
          }
          price={'124,000원'}
        />
        <MyPerformanceCard
          imageSrc={BusanRockFestaImg}
          name={'집'}
          startTime={'2025.03.21 오후 1시 30분'}
          location={
            '노들섬 라이브하우스 (서울특별시 용산구 양녕로 445 (이촌동)'
          }
          price={'124,000원'}
        />
        <MyPerformanceCard
          imageSrc={BusanRockFestaImg}
          name={'집'}
          startTime={'2025.03.21 오후 1시 30분'}
          location={
            '노들섬 라이브하우스 (서울특별시 용산구 양녕로 445 (이촌동)'
          }
          price={'124,000원'}
        />
        <MyPerformanceCard
          imageSrc={BusanRockFestaImg}
          name={'집'}
          startTime={'2025.03.21 오후 1시 30분'}
          location={
            '노들섬 라이브하우스 (서울특별시 용산구 양녕로 445 (이촌동)'
          }
          price={'124,000원'}
        />
      </div>
      <div className={S.createBtnWrapper}>
        <Button size="lg" type="button" color="primary" onClick={() => navigate('/band/performance/create')}>
          공연 생성
        </Button>
      </div>
      <NavigationBar />
    </div>
  );
}
