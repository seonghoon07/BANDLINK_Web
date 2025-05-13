import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import Content from '@/features/fan/SearchPerformance/Content';

export default function SearchPerformance() {
  return (
    <div className={S.container}>
      <Content />
      <NavigationBar />
    </div>
  );
}
