import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import { ArrowIcon } from '@/assets';
import Button from '@/components/common/Button';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userType } from '@/shared/store/atom';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '@/features/user/services/user.mutation';
export default function SignupInfo() {
    const navigate = useNavigate();
    const rolePathMap = {
        BAND: 'band',
        FAN: 'fan',
        PLACE_OWNER: 'spaceOwner',
    };
    const [nickname, setNickname] = useState('');
    const [bandname, setBandname] = useState('');
    const [buttonState, setButtonState] = useState('disabled');
    const [warningText, setWarningText] = useState('');
    const [step, setStep] = useState(1);
    const [currentUserType] = useAtom(userType);
    const isBand = currentUserType === 'BAND';
    const { mutateAsync: registerUserMutate } = useRegisterUserMutation();
    const validateInput = (value) => {
        if (value.length === 0)
            return { valid: false, warning: '' };
        if (value.length > 12) {
            return {
                valid: false,
                warning: isBand && step === 2
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
        const requestBody = isBand
            ? { nickname, bandname, role: currentUserType }
            : { nickname, role: currentUserType };
        await registerUserMutate(requestBody, {
            onSuccess: () => {
                if (currentUserType) {
                    const path = rolePathMap[currentUserType];
                    navigate(`/${path}/dashboard`);
                }
            },
            onError: (error) => {
                const message = error?.response?.data?.message || '회원가입 중 에러가 발생했습니다.';
                alert(message);
            },
        });
    };
    const inputValue = step === 1 ? nickname : bandname;
    const setInputValue = step === 1 ? setNickname : setBandname;
    return (_jsxs("div", { className: S.layout, children: [_jsx(ArrowIcon, { width: "24px", height: "24px", onClick: () => {
                    if (isBand && step === 2) {
                        setStep(1);
                    }
                    else {
                        navigate(-1);
                    }
                } }), _jsxs("div", { className: S.contentWrapper, children: [_jsx("div", { children: isBand ? (_jsxs(_Fragment, { children: [_jsx("p", { className: S.titleText, children: step === 1 ? '밴드로 전환하기 전에' : '마지막입니다!' }), _jsx("p", { className: S.titleText, children: step === 1
                                        ? '멋진 닉네임을 알려주세요'
                                        : '멋진 밴드명을 입력해주세요' })] })) : (_jsxs(_Fragment, { children: [_jsx("p", { className: S.titleText, children: "\uB9C8\uC9C0\uB9C9\uC785\uB2C8\uB2E4!" }), _jsx("p", { className: S.titleText, children: "\uBA4B\uC9C4 \uB2C9\uB124\uC784\uC744 \uC54C\uB824\uC8FC\uC138\uC694" })] })) }), _jsxs("div", { className: S.inputFormWrapper, children: [_jsxs("div", { className: S.warningWrapper, children: [_jsx("input", { className: S.nicknameInput({
                                            status: warningText ? 'error' : 'default',
                                        }), placeholder: isBand && step === 1
                                            ? '닉네임을 입력해주세요.'
                                            : '밴드명을 입력해주세요.', value: inputValue, onChange: (e) => setInputValue(e.target.value) }), _jsx("p", { className: S.warning, children: warningText })] }), _jsx(Button, { color: buttonState, size: "lg", type: "submit", onClick: handleSignupClick, children: step === 1 && isBand ? '다음으로' : '시작하기' })] })] })] }));
}
