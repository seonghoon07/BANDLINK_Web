import * as S from './style.css';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';
import Notification from '@/features/FanDashboard/Notification';
import LivePerformance from '@/features/FanDashboard/LivePerformance';

export default function FanDashboard() {
  return (
    <div className={S.layout}>
      <Header />
      <div className={S.contentLayout}>
        <Notification />
        <LivePerformance />
      </div>
      <NavigationBar />
    </div>
  );
}
