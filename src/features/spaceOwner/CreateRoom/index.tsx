import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import Button from '@/components/common/Button';

export default function CreateRoom() {
  return (
    <div className={S.container}>
      <div className={S.submitBtnContainer}>
        <Button type="submit" size="lg" color="primary">장소 등록</Button>
      </div>
      <NavigationBar />
    </div>
  );
}
