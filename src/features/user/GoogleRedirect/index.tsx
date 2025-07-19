import * as S from './style.css';

export default function GoogleRedirect() {
  return (
    <div className={S.redirectContainer}>
      <p className={S.loadingText}>로그인 중입니다</p>
      <p className={S.loadingText}>잠시만 기다려주세요...</p>
    </div>
  );
}
