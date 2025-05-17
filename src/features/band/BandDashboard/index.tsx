import * as S from './style.css';
import Header from '@/components/layout/Header';
import NavigationBar from '@/components/layout/NavigationBar';
import Notification from '@/features/band/BandDashboard/components/Notification';
import RecommendPlace from '@/features/band/BandDashboard/components/RecommendPlace';
import RecentPlace from '@/features/band/BandDashboard/components/RecentPlace';

export default function BandDashboard() {
  return (
    <div className={S.layout}>
      <Header />
      <div className={S.contentLayout}>
        <Notification />
        <RecommendPlace />
        <RecentPlace />
      </div>
      <NavigationBar />
    </div>
  );
}
