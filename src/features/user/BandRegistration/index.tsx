import * as S from './style.css';
import { ArrowIcon } from '@/assets';
import Button from '@/components/common/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateUserRoleMutation } from '@/features/user/services/user.mutation';

export default function BandRegistration() {
  const navigate = useNavigate();
  const [bandname, setBandname] = useState('');
  const [buttonState, setButtonState] = useState<'primary' | 'disabled'>(
    'disabled'
  );
  const [warningText, setWarningText] = useState('');
  const { mutate: updateRoleMutate } = useUpdateUserRoleMutation();

  useEffect(() => {
    if (bandname.length === 0) {
      setButtonState('disabled');
      setWarningText('');
    } else if (bandname.length > 12) {
      setButtonState('disabled');
      setWarningText('밴드명은 12자 이하여야 합니다.');
    } else {
      setButtonState('primary');
      setWarningText('');
    }
  }, [bandname]);

  const handleSignupClick = async () => {
    const updateBandRoleBody = { role: 'BAND', bandname: bandname };
    updateRoleMutate(updateBandRoleBody, {
      onSuccess: () => {
        alert('밴드로 전환되었습니다.');
        navigate('/band/dashboard');
      },
    });
  };

  return (
    <div className={S.layout}>
      <ArrowIcon width="24px" height="24px" onClick={() => navigate(-1)} />
      <div className={S.contentWrapper}>
        <div>
          <p className={S.titleText}>밴드로 전환하기 전에</p>
          <p className={S.titleText}>멋진 밴드명을 알려주세요</p>
        </div>
        <div className={S.inputFormWrapper}>
          <div className={S.warningWrapper}>
            <input
              className={S.nicknameInput({
                status: warningText ? 'error' : 'default',
              })}
              placeholder="밴드명을 입력해주세요."
              value={bandname}
              onChange={(e) => setBandname(e.target.value)}
            />
            <p className={S.warning}>{warningText}</p>
          </div>
          <Button
            color={buttonState}
            size="lg"
            type="submit"
            onClick={handleSignupClick}
          >
            시작하기
          </Button>
        </div>
      </div>
    </div>
  );
}
