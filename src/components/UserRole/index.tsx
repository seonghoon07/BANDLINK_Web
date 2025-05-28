import * as S from './style.css';
import theme from '@/shared/styles/theme.css';

interface roleProps {
  role: string;
  roleInfo: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  selected: boolean;
  onClick: () => void;
}

export default function UserRole({
  role,
  roleInfo,
  Icon,
  selected,
  onClick,
}: roleProps) {
  return (
    <div className={S.layout({ selected })} onClick={onClick}>
      <Icon
        width="40px"
        height="40px"
        style={{ fill: selected ? theme.yellow['500'] : theme.white }}
      />
      <div className={S.textWrapper}>
        <p className={S.role({ selected })}>{role}</p>
        <p className={S.roleInfo({ selected })}>{roleInfo}</p>
      </div>
    </div>
  );
}
