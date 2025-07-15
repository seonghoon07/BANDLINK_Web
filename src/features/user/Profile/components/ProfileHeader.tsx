import * as S from '@/features/user/Profile/style.css';

interface ProfileHeaderProps {
  username: string;
  email: string;
}

export default function ProfileHeader({ username, email}: ProfileHeaderProps) {
  return (
    <div className={S.profileTextWrapper}>
      <p className={S.greetText}>
        <span className={S.name}>{username}</span>님 안녕하세요!
      </p>
      <p className={S.email}>{email}</p>
    </div>
  );
}
