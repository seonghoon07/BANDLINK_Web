import * as S from './style.css';
import { LogoIcon } from '@/assets';

export default function Header() {
  return (
    <div className={S.headerLayout}>
      <div className={S.logoLayout}>
        <LogoIcon width={38} height={38} />
        <p className={S.textLogo}>BANDLINK</p>
      </div>
    </div>
  );
}
