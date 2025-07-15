import * as S from './style.css';
import Header from '@/components/layout/Header';
import Notification from './components/Notification';
import LivePerformances from './components/LivePerformances';
import UpcomingPerformances from './components/UpcomingPerformances';
import NavigationBar from '@/components/layout/NavigationBar';

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
