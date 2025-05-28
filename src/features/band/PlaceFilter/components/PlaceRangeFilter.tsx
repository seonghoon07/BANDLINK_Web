import { getTrackBackground, Range } from 'react-range';
import * as S from '../style.css';
import theme from '@/shared/styles/theme.css';

interface PriceRangeFilterProps {
  priceRange: number[];
  setPriceRange: (vals: number[]) => void;
}

export function PriceRangeFilter({
  priceRange,
  setPriceRange,
}: PriceRangeFilterProps) {
  return (
    <div className={S.categoryContainer}>
      <p className={S.categoryTitle}>가격 (시간 당)</p>
      <p className={S.price}>
        {priceRange[0].toLocaleString()}원 ~ {priceRange[1].toLocaleString()}원
      </p>
      <Range
        values={priceRange}
        onChange={setPriceRange}
        min={0}
        max={250000}
        step={5000}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className={S.track}
            style={{
              background: getTrackBackground({
                values: priceRange,
                colors: [
                  theme.gray['400'],
                  theme.yellow['500'],
                  theme.gray['400'],
                ],
                min: 0,
                max: 250000,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => <div {...props} className={S.thumb} />}
      />
    </div>
  );
}
