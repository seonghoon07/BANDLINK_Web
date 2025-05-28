import { CheckIcon } from '@/assets';
import * as S from '../style.css';

interface PlaceTypeFilterProps {
  types: readonly string[];
  checkedTypes: string[];
  toggleType: (type: string) => void;
}

export function PlaceTypeFilter({
  types,
  checkedTypes,
  toggleType,
}: PlaceTypeFilterProps) {
  return (
    <div className={S.categoryContainer}>
      <p className={S.categoryTitle}>장소</p>
      <div className={S.typeOption}>
        {types.map((type) => {
          const isChecked = checkedTypes.includes(type);
          return (
            <div
              key={type}
              className={S.typeItem}
              onClick={() => toggleType(type)}
            >
              <p className={S.type}>{type}</p>
              <div className={isChecked ? S.checkedBox : S.uncheckedBox}>
                {isChecked && <CheckIcon width={18} height={18} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
