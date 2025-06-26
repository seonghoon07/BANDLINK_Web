import * as S from './style.css';
import React from 'react';

interface roleProps {
  role: string;
  roleInfo: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

export default function UserRole({ role, roleInfo, Icon, onClick }: roleProps) {
  return (
    <div className={S.layout} onClick={onClick}>
      <Icon width="40px" height="40px" />
      <div className={S.textWrapper}>
        <p className={S.role}>{role}</p>
        <p className={S.roleInfo}>{roleInfo}</p>
      </div>
    </div>
  );
}
