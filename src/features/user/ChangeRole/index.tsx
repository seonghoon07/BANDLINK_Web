import * as S from './style.css';
import UserRole from '@/components/UserRole';
import { role } from '@/shared/libs/role';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai/index';
import { userType } from '@/shared/store/atom';
import { RoleType } from '@/shared/types/roleType';
import { ArrowIcon } from '@/assets';
import { useUpdateUserRoleMutation } from '@/features/user/services/user.mutation';
import { useUser } from '@/features/user/services/user.query';

export default function ChangeRole() {
  const navigate = useNavigate();
  const [, setCurrentUserType] = useAtom(userType);
  const { mutate: updateRoleMutate } = useUpdateUserRoleMutation();
  const { data: user } = useUser();

  const handleRoleClick = (currentRole: RoleType) => {
    setCurrentUserType(currentRole);
    if (currentRole === 'BAND') {
      if (user.roles.includes('BAND')) {
        navigate('/band/dashboard');
      } else {
        navigate('/register/band/name');
      }
    } else {
      const updateRoleBody = { role: currentRole };
      updateRoleMutate(updateRoleBody, {
        onSuccess: () =>
          currentRole === 'FAN'
            ? navigate('/fan/dashboard')
            : navigate('/spaceOwner/dashboard'),
      });
    }
  };

  return (
    <div className={S.layout}>
      <div className={S.contentWrapper}>
        <div className={S.headerContainer}>
          <ArrowIcon onClick={() => navigate('/profile')} />
          <div>
            <p className={S.questionText}>
              <span className={S.questionTextHighlight}>BANDLINK</span>를
            </p>
            <p className={S.questionText}>어떻게 사용하고 싶으세요?</p>
          </div>
        </div>
        <div className={S.roleInfoWrapper}>
          {role.map((item) => (
            <UserRole
              key={item.id}
              role={item.role}
              roleInfo={item.roleInfo}
              Icon={item.Icon}
              onClick={() => handleRoleClick(item.type)}
            />
          ))}
          <p className={S.changeableText}>
            ※ 선택은 추후 설정에서 변경할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
