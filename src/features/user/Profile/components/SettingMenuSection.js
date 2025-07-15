import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from '@/features/user/Profile/style.css';
import { useNavigate } from 'react-router-dom';
import { useDeleteUserMutation, useLogoutUserMutation, } from '@/features/user/services/user.mutation';
import { clearCookie } from '@/shared/utils/cookie/cookie';
import { useAtom } from 'jotai/index';
import { userType } from '@/shared/store/atom';
const settingSections = [
    {
        title: '계정',
        items: [
            { label: '유저 전환', href: '/role/change' },
            { label: '로그아웃', href: '/', danger: true },
            { label: '회원 탈퇴', href: '/', danger: true },
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
    const [, setType] = useAtom(userType);
    const { mutate: logoutMutate } = useLogoutUserMutation();
    const { mutate: deleteUserMutate } = useDeleteUserMutation();
    const handleMenuClick = (item) => {
        if (item.label === '로그아웃') {
            const isLogout = confirm('정말로 로그아웃 하시겠습니까?');
            if (isLogout) {
                logoutMutate(undefined, {
                    onSuccess: () => {
                        clearCookie();
                        setType(null);
                        if (item.href) {
                            navigate(item.href);
                        }
                    },
                });
            }
            return;
        }
        if (item.label === '회원 탈퇴') {
            const isDeleteUser = confirm('정말로 탈퇴하시겠습니까?');
            if (isDeleteUser) {
                deleteUserMutate(undefined, {
                    onSuccess: () => {
                        clearCookie();
                        setType(null);
                        if (item.href) {
                            navigate(item.href);
                        }
                    },
                });
            }
            return;
        }
        if (item.href) {
            navigate(item.href);
        }
    };
    return (_jsx("div", { className: S.settingMenuList, children: settingSections.map((section, index) => (_jsxs("div", { children: [_jsx("div", { className: S.menuSectionTitleContainer, children: _jsx("p", { className: S.menuSectionTitle, children: section.title }) }), section.items.map((item) => (_jsx("div", { className: S.menuItemContainer, onClick: () => handleMenuClick(item), children: _jsx("p", { className: S.menuItem, children: _jsx("span", { className: item.danger ? S.warningText : '', children: item.label }) }) }, item.label))), index !== settingSections.length - 1 && (_jsx("div", { className: S.menuDivider }))] }, section.title))) }));
}
