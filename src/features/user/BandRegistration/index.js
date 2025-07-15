import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style.css';
import { ArrowIcon } from '@/assets';
import Button from '@/components/common/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateUserRoleMutation } from '@/features/user/services/user.mutation';
export default function BandRegistration() {
    const navigate = useNavigate();
    const [bandname, setBandname] = useState('');
    const [buttonState, setButtonState] = useState('disabled');
    const [warningText, setWarningText] = useState('');
    const { mutate: updateRoleMutate } = useUpdateUserRoleMutation();
    useEffect(() => {
        if (bandname.length === 0) {
            setButtonState('disabled');
            setWarningText('');
        }
        else if (bandname.length > 12) {
            setButtonState('disabled');
            setWarningText('밴드명은 12자 이하여야 합니다.');
        }
        else {
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
    return (_jsxs("div", { className: S.layout, children: [_jsx(ArrowIcon, { width: "24px", height: "24px", onClick: () => navigate(-1) }), _jsxs("div", { className: S.contentWrapper, children: [_jsxs("div", { children: [_jsx("p", { className: S.titleText, children: "\uBC34\uB4DC\uB85C \uC804\uD658\uD558\uAE30 \uC804\uC5D0" }), _jsx("p", { className: S.titleText, children: "\uBA4B\uC9C4 \uBC34\uB4DC\uBA85\uC744 \uC54C\uB824\uC8FC\uC138\uC694" })] }), _jsxs("div", { className: S.inputFormWrapper, children: [_jsxs("div", { className: S.warningWrapper, children: [_jsx("input", { className: S.nicknameInput({
                                            status: warningText ? 'error' : 'default',
                                        }), placeholder: "\uBC34\uB4DC\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", value: bandname, onChange: (e) => setBandname(e.target.value) }), _jsx("p", { className: S.warning, children: warningText })] }), _jsx(Button, { color: buttonState, size: "lg", type: "submit", onClick: handleSignupClick, children: "\uC2DC\uC791\uD558\uAE30" })] })] })] }));
}
