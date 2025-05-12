import * as S from './style.css';

export default function Notification() {
  return (
    <div className={S.notificationLayout}>
      <div className={S.gradientOverlay} />
      <div className={S.notificationWrapper}>
        <p className={S.notificationText}>부산 삼락생태공원에서</p>
        <p className={S.notificationText}>2025 부산국제록페스티벌 개최</p>
      </div>
    </div>
  );
}
