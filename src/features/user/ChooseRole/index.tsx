import * as S from './style.css';
import UserRole from '@/components/UserRole';
import { role } from '@/shared/libs/role';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai/index';
import { userType } from '@/shared/store/atom';
import { UserType } from '@/shared/types/userType';

export default function ChooseRole() {
  const navigate = useNavigate();
  const [, setCurrentUserType] = useAtom(userType);

  const handleRoleClick = (currentRole: UserType) => {
    setCurrentUserType(currentRole);
    navigate('/nickname');
  };

  return (
    <div className={S.layout}>
      <div className={S.contentWrapper}>
        <div>
          <p className={S.questionText}>
            <span className={S.questionTextHighlight}>BANDLINK</span>를
          </p>
          <p className={S.questionText}>어떻게 사용하고 싶으세요?</p>
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
