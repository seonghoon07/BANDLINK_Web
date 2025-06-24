import * as S from '../style.css';

export const PlaceType = ({
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
      className={`${S.placeType} ${selected ? S.selectedBorder : ''}`}
      onClick={onClick}
    >
      <p className={`${S.placeTypeText} ${selected ? S.selectedColor : ''}`}>
        {label}
      </p>
    </div>
  );
};
