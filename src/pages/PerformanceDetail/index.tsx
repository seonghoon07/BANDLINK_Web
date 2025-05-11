import * as S from './style.css';
import NavigationBar from '@/components/NavigationBar';
import Content from '@/features/performanceDetail/Content';

export default function PerformanceDetail() {
  return (
    <div className={S.container}>
      <Content />
      <NavigationBar />
    </div>
  );
}
