import * as S from './style.css';
import Content from '@/features/FanDashboard/Content';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';

export default function FanDashboard() {
  return (
    <div className={S.layout}>
      <Header />
      <Content />
      <NavigationBar />
    </div>
  );
}
