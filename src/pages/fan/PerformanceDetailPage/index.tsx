import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import Content from '@/features/fan/performanceDetail/Content';

export default function PerformanceDetailPage() {
  return (
    <div className={S.container}>
      <Content />
      <NavigationBar />
    </div>
  );
}
