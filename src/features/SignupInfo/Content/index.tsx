import * as S from './style.css';
import Arrow from '@/assets/arrow.svg?react';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userType } from '@/shared/store/atom';

export default function Content() {
  const [name, setName] = useState('');
  const [buttonState, setButtonState] = useState<'primary' | 'disabled'>(
    'primary'
  );
  const [warningText, setWarningText] = useState('');
  const [currentUserType] = useAtom(userType);

  useEffect(() => {
    if (name.length > 12) {
      if (currentUserType === 'user')
        setWarningText('닉네임은 12자 이하여야 합니다.');
      else setWarningText('밴드명은 12자 이하여야 합니다.');
      setButtonState('disabled');
    } else if (name.length === 0) {
      setButtonState('disabled');
    } else {
      setButtonState('primary');
      setWarningText('');
    }
  }, [name]);

  return (
    <div className={S.layout}>
      <Arrow width="24px" height="24px" />
      <div className={S.contentWrapper}>
        <div>
          {currentUserType === 'user' ? (
            <>
              <p className={S.titleText}>마지막입니다!</p>
              <p className={S.titleText}>멋진 닉네임을 알려주세요</p>
            </>
          ) : (
            <>
              <p className={S.titleText}>밴드로 전환하기 전에</p>
              <p className={S.titleText}>멋진 밴드명을 알려주세요</p>
            </>
          )}
        </div>
        <div className={S.inputFormWrapper}>
          <div className={S.warningWrapper}>
            <input
              className={S.nicknameInput({
                status: warningText ? 'error' : 'default',
              })}
              placeholder={currentUserType === 'user' ? '닉네임' : '밴드명'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className={S.warning}>{warningText}</p>
          </div>
          <Button color={buttonState} size="lg">
            시작하기
          </Button>
        </div>
      </div>
    </div>
  );
}
