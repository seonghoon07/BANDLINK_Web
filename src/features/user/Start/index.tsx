import * as S from './style.css';
import { GoogleIcon, LogoIcon, TextLogoIcon } from '@/assets';

export default function Start() {
  const locateOauth = () => {
    window.location.href = import.meta.env.VITE_OAUTH_URL;
  };
  return (
    <div className={S.layout}>
      <div className={S.contentWrapper}>
        <div className={S.logoLayout}>
          <LogoIcon width={240} height={240} />
          <TextLogoIcon />
        </div>
        <div className={S.googleLoginBtn} onClick={locateOauth}>
          <GoogleIcon />
          <p className={S.googleLoginText}>구글 로그인</p>
        </div>
      </div>
    </div>
  );
}
