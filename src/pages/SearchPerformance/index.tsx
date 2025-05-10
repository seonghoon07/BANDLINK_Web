import * as S from './style.css';
import NavigationBar from '@/components/NavigationBar';
import Content from '@/features/SearchPerformance/Content';

export default function SearchPerformance() {
  return (
    <div className={S.container}>
      <Content />
      <NavigationBar />
    </div>
  );
}
