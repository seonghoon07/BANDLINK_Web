import * as S from '@/features/user/Profile/style.css';
import { useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from '@/features/user/services/user.mutation';
import { clearCookie } from '@/shared/utils/cookie/cookie';

interface SettingItem {
  label: string;
  danger?: boolean;
  href?: string;
}

interface SettingSection {
  title: string;
  items: SettingItem[];
}

const settingSections: SettingSection[] = [
  {
    title: '계정',
    items: [
      { label: '유저 전환', href: '/role/change' },
      { label: '로그아웃', href: '/', danger: true },
    ],
  },
  {
    title: '고객센터',
    items: [
      { label: '공지사항', href: '/notice' },
      { label: 'FAQ', href: '/question' },
    ],
  },
];

export default function SettingMenuSection() {
  const navigate = useNavigate();
  const { mutate: logoutMutate } = useLogoutUserMutation();

  const handleMenuClick = (item: SettingItem) => {
    if (item.label === '로그아웃') {
      const isLogout = confirm('정말로 로그아웃 하시겠습니까?');
      if (isLogout) {
        logoutMutate(undefined, {
          onSuccess: () => {
            clearCookie();
            navigate('/');
          },
        });
      }
      return;
    }

    if (item.href) {
      navigate(item.href);
    }
  };

  return (
    <div className={S.settingMenuList}>
      {settingSections.map((section, index) => (
        <div key={section.title}>
          <div className={S.menuSectionTitleContainer}>
            <p className={S.menuSectionTitle}>{section.title}</p>
          </div>
          {section.items.map((item) => (
            <div
              className={S.menuItemContainer}
              key={item.label}
              onClick={() => handleMenuClick(item)}
            >
              <p className={S.menuItem}>
                <span className={item.danger ? S.warningText : ''}>
                  {item.label}
                </span>
              </p>
            </div>
          ))}
          {index !== settingSections.length - 1 && (
            <div className={S.menuDivider} />
          )}
        </div>
      ))}
    </div>
  );
}
