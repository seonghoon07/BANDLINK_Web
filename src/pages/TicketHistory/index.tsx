import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import Content from '@/features/fan/TicketHistory/Content';

export default function TicketHistory() {
  return (
    <div className={S.container}>
      <Content />
      <NavigationBar />
    </div>
  );
}
