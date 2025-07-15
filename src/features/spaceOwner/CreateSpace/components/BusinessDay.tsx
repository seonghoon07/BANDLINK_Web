import * as S from '../style.css';

export const BusinessDay = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`${S.businessDay} ${selected ? S.selectedBorder : ''}`}
      onClick={onClick}
    >
      <p className={`${S.businessDayText} ${selected ? S.selectedColor : ''}`}>
        {label}
      </p>
    </div>
  );
};
