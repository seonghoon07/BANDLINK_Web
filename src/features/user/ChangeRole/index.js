import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import UserRole from '@/components/UserRole';
import { role } from '@/shared/libs/role';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai/index';
import { userType } from '@/shared/store/atom';
import { ArrowIcon } from '@/assets';
import { useUpdateUserRoleMutation } from '@/features/user/services/user.mutation';
import { useUser } from '@/features/user/services/user.query';
export default function ChangeRole() {
    const navigate = useNavigate();
    const [, setCurrentUserType] = useAtom(userType);
    const { mutate: updateRoleMutate } = useUpdateUserRoleMutation();
    const { data: user } = useUser();
    const handleRoleClick = (currentRole) => {
        setCurrentUserType(currentRole);
        if (currentRole === 'BAND') {
            if (user.roles.includes('BAND')) {
                navigate('/band/dashboard');
            }
            else {
                navigate('/register/band/name');
            }
        }
        else {
            const updateRoleBody = { role: currentRole };
            updateRoleMutate(updateRoleBody, {
                onSuccess: () => currentRole === 'FAN'
                    ? navigate('/fan/dashboard')
                    : navigate('/spaceOwner/dashboard'),
            });
        }
    };
    return (_jsx("div", { className: S.layout, children: _jsxs("div", { className: S.contentWrapper, children: [_jsxs("div", { className: S.headerContainer, children: [_jsx(ArrowIcon, { onClick: () => navigate('/profile') }), _jsxs("div", { children: [_jsxs("p", { className: S.questionText, children: [_jsx("span", { className: S.questionTextHighlight, children: "BANDLINK" }), "\uB97C"] }), _jsx("p", { className: S.questionText, children: "\uC5B4\uB5BB\uAC8C \uC0AC\uC6A9\uD558\uACE0 \uC2F6\uC73C\uC138\uC694?" })] })] }), _jsxs("div", { className: S.roleInfoWrapper, children: [role.map((item) => (_jsx(UserRole, { role: item.role, roleInfo: item.roleInfo, Icon: item.Icon, onClick: () => handleRoleClick(item.type) }, item.id))), _jsx("p", { className: S.changeableText, children: "\u203B \uC120\uD0DD\uC740 \uCD94\uD6C4 \uC124\uC815\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." })] })] }) }));
}
