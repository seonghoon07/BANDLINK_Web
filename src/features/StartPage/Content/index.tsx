import * as S from './style.css';
import Logo from '@/assets/logo.svg?react';
import TextLogo from '@/assets/textLogo.svg?react';
import GoogleLogo from '@/assets/googleLogo.svg?react';

export default function Content() {
  return (
    <div className={S.layout}>
      <div className={S.contentWrapper}>
        <div className={S.logoLayout}>
          <Logo width={240} height={240} />
          <TextLogo />
        </div>
        <div className={S.googleLoginBtn}>
          <GoogleLogo />
          <p className={S.googleLoginText}>구글 로그인</p>
        </div>
      </div>
    </div>
  );
}
