import * as S from './style.css';
import Arrow from '@/assets/arrow.svg?react';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';

export default function Content() {
  const [nickname, setNickname] = useState('');
  const [buttonState, setButtonState] = useState<'primary' | 'disabled'>(
    'primary'
  );
  const [warningText, setWarningText] = useState('');

  useEffect(() => {
    if (nickname.length > 12) {
      setWarningText('닉네임은 12자 이하여야 합니다.');
      setButtonState('disabled');
    } else if (nickname.length === 0) {
      setButtonState('disabled');
    } else {
      setButtonState('primary');
      setWarningText('');
    }
  }, [nickname]);

  return (
    <div className={S.layout}>
      <Arrow width="24px" height="24px" />
      <div className={S.contentWrapper}>
        <div>
          <p className={S.titleText}>마지막입니다!</p>
          <p className={S.titleText}>멋진 닉네임을 알려주세요</p>
        </div>
        <div className={S.inputFormWrapper}>
          <div className={S.warningWrapper}>
            <input
              className={S.nicknameInput({
                status: warningText ? 'error' : 'default',
              })}
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
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
