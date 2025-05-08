import * as S from './style.css';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';
import Notification from 'src/features/FanDashboard/Notification';

export default function FanDashboard() {
  return (
    <div className={S.layout}>
      <Header />
      <Notification />
      <NavigationBar />
    </div>
  );
}
