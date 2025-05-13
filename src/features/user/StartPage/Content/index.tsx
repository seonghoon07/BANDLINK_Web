import * as S from './style.css';
import { GoogleIcon, LogoIcon, TextLogoIcon } from '@/assets';

export default function Content() {
  return (
    <div className={S.layout}>
      <div className={S.contentWrapper}>
        <div className={S.logoLayout}>
          <LogoIcon width={240} height={240} />
          <TextLogoIcon />
        </div>
        <div className={S.googleLoginBtn}>
          <GoogleIcon />
          <p className={S.googleLoginText}>구글 로그인</p>
        </div>
      </div>
    </div>
  );
}
