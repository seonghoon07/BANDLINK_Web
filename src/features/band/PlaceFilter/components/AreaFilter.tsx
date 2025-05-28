import * as S from '../style.css';
import { busanDistricts } from '@/shared/libs/areaItems';

interface AreaFilterProps {
  areaItems: string[];
  toggleAreaItem: (district: string) => void;
  resetAreaItems: () => void;
}

export function AreaFilter({
  areaItems,
  toggleAreaItem,
  resetAreaItems,
}: AreaFilterProps) {
  return (
    <div className={S.categoryContainer}>
      <p className={S.categoryTitle}>지역</p>
      <div className={S.selectAreaContainer}>
        <button
          className={S.allAreaBtn({ selected: areaItems.length === 0 })}
          onClick={resetAreaItems}
        >
          전체
        </button>
        <div className={S.areaWrapper}>
          {busanDistricts.map((district) => {
            const isSelected = areaItems.includes(district);
            return (
              <button
                key={district}
                className={isSelected ? S.checkedAreaBtn : S.areaBtn}
                onClick={() => toggleAreaItem(district)}
              >
                {district}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
