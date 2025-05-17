import * as S from './style.css';
import Header from '@/components/layout/Header';
import NavigationBar from '@/components/layout/NavigationBar';

export default function BandDashboard() {
  return (
    <div className={S.layout}>
      <Header />
      <div className={S.contentLayout}></div>
      <NavigationBar />
    </div>
  );
}
