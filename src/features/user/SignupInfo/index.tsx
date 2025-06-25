import * as S from './style.css';
import { ArrowIcon } from '@/assets';
import Button from '@/components/common/Button';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userType } from '@/shared/store/atom';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '@/features/user/services/user.mutation';
import { UserData, RoleType } from '@/shared/types';

export default function SignupInfo() {
  const navigate = useNavigate();
  const rolePathMap: Record<RoleType, string> = {
    BAND: 'band',
    FAN: 'fan',
    PLACE_OWNER: 'spaceOwner',
  };
  const [nickname, setNickname] = useState('');
  const [bandname, setBandname] = useState('');
  const [buttonState, setButtonState] = useState<'primary' | 'disabled'>(
    'disabled'
  );
  const [warningText, setWarningText] = useState('');
  const [step, setStep] = useState<1 | 2>(1);
  const [currentUserType] = useAtom(userType);
  const isBand = currentUserType === 'BAND';

  const { mutateAsync: registerUserMutate } = useRegisterUserMutation();

  const validateInput = (value: string) => {
    if (value.length === 0) return { valid: false, warning: '' };
    if (value.length > 12) {
      return {
        valid: false,
        warning:
          isBand && step === 2
            ? '밴드명은 12자 이하여야 합니다.'
            : '닉네임은 12자 이하여야 합니다.',
      };
    }
    return { valid: true, warning: '' };
  };

  useEffect(() => {
    const value = step === 1 ? nickname : bandname;
    const { valid, warning } = validateInput(value);
    setButtonState(valid ? 'primary' : 'disabled');
    setWarningText(warning);
  }, [nickname, bandname, step]);

  const handleSignupClick = async () => {
    if (isBand && step === 1) {
      setStep(2);
      return;
    }

    const requestBody: UserData = isBand
      ? { nickname, bandname, role: currentUserType }
      : { nickname, role: currentUserType };

    await registerUserMutate(requestBody, {
      onSuccess: () => {
        const path = rolePathMap[currentUserType];
        navigate(`/${path}/dashboard`);
      },
      onError: (error: any) => {
        const message =
          error?.response?.data?.message || '회원가입 중 에러가 발생했습니다.';
        alert(message);
      },
    });
  };

  const inputValue = step === 1 ? nickname : bandname;
  const setInputValue = step === 1 ? setNickname : setBandname;

  return (
    <div className={S.layout}>
      <ArrowIcon
        width="24px"
        height="24px"
        onClick={() => {
          if (isBand && step === 2) {
            setStep(1);
          } else {
            navigate(-1);
          }
        }}
      />
      <div className={S.contentWrapper}>
        <div>
          {isBand ? (
            <>
              <p className={S.titleText}>
                {step === 1 ? '밴드로 전환하기 전에' : '마지막입니다!'}
              </p>
              <p className={S.titleText}>
                {step === 1
                  ? '멋진 밴드명을 입력해주세요'
                  : '멋진 닉네임을 알려주세요'}
              </p>
            </>
          ) : (
            <>
              <p className={S.titleText}>마지막입니다!</p>
              <p className={S.titleText}>멋진 닉네임을 알려주세요</p>
            </>
          )}
        </div>
        <div className={S.inputFormWrapper}>
          <div className={S.warningWrapper}>
            <input
              className={S.nicknameInput({
                status: warningText ? 'error' : 'default',
              })}
              placeholder={
                isBand && step === 1
                  ? '밴드명을 입력해주세요.'
                  : '닉네임을 입력해주세요.'
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <p className={S.warning}>{warningText}</p>
          </div>
          <Button
            color={buttonState}
            size="lg"
            type="submit"
            onClick={handleSignupClick}
          >
            {step === 1 ? '다음으로' : '시작하기'}
          </Button>
        </div>
      </div>
    </div>
  );
}
