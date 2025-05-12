import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import ProfileHeader from '@/features/user/Profile/components/ProfileHeader';
import InfoSummaryCard from '@/features/user/Profile/components/InfoSummaryCard';
import SettingMenuSection from '@/features/user/Profile/components/SettingMenuSection';

export default function Profile() {
  return (
    <div className={S.container}>
      <div className={S.profileContainer}>
        <ProfileHeader username={'최성훈'} email={'chltjdgns1009@gmail.com'} />
        <InfoSummaryCard type={'팬'} point={123400} coupon={0} />
        <SettingMenuSection />
      </div>
      <NavigationBar />
    </div>
  );
}
