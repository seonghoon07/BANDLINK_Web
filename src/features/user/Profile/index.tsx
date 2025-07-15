import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import ProfileHeader from '@/features/user/Profile/components/ProfileHeader';
import InfoSummaryCard from '@/features/user/Profile/components/InfoSummaryCard';
import SettingMenuSection from '@/features/user/Profile/components/SettingMenuSection';
import { useUser } from '@/features/user/services/user.query';
import { useAtom } from 'jotai/index';
import { userType } from '@/shared/store/atom';

export default function Profile() {
  const [currentUserRole] = useAtom(userType);
  const { data: user } = useUser();

  return (
    <div className={S.container}>
      <div className={S.profileContainer}>
        <ProfileHeader
          username={
            currentUserRole === 'BAND' ? user?.bandname : user?.nickname
          }
          email={user?.email}
        />
        {currentUserRole && (
          <InfoSummaryCard type={currentUserRole} point={12400} coupon={0} />
        )}
        <SettingMenuSection />
      </div>
      <NavigationBar />
    </div>
  );
}
