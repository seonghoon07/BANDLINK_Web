import * as S from './style.css';
import Header from '@/components/layout/Header';
import NavigationBar from '@/components/layout/NavigationBar';
import Notification from '@/features/FanDashboard/Notification';
import LivePerformances from '@/features/FanDashboard/LivePerformances';
import UpcomingPerformances from '@/features/FanDashboard/UpcomingPerformances';

export default function FanDashboard() {
  return (
    <div className={S.layout}>
      <Header />
      <div className={S.contentLayout}>
        <Notification />
        <LivePerformances />
        <UpcomingPerformances />
      </div>
      <NavigationBar />
    </div>
  );
}
