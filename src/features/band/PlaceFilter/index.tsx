import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { CloseIcon, CheckIcon } from '@/assets';
import { useState } from 'react';
import { getTrackBackground, Range } from 'react-range';
import { busanDistricts } from '@/shared/libs/areaItems';
import theme from '@/shared/styles/theme.css';

export default function PlaceFilter() {
  const types = ['합주실', '소극장'];

  const [checkedTypes, setCheckedTypes] = useState<string[]>([
    '합주실',
    '소극장',
  ]);
  const [priceRange, setPriceRange] = useState([0, 250000]);
  const [areaItems, setAreaItems] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setCheckedTypes((prev) => {
      const isSelected = prev.includes(type);

      if (isSelected) {
        if (prev.length <= 1) {
          return prev;
        }
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const onResetClick = () => {
    setCheckedTypes(['합주실', '소극장']);
    setPriceRange([0, 250000]);
    setAreaItems([]);
  };

  return (
    <div className={S.container}>
      <div className={S.filterContainer}>
        <header className={S.filterHeader}>
          <CloseIcon />
          <p className={S.headerText}>필터</p>
          <p className={S.resetText} onClick={onResetClick}>
            초기화
          </p>
        </header>
        <div className={S.filterContentWrapper}>
          <div className={S.categoryContainer}>
            <p className={S.categoryTitle}>장소</p>
            <div className={S.typeOption}>
              {types.map((type) => {
                const isChecked = checkedTypes.includes(type);
                return (
                  <div key={type} className={S.typeItem}>
                    <p className={S.type}>{type}</p>
                    <div
                      className={isChecked ? S.checkedBox : S.uncheckedBox}
                      onClick={() => toggleType(type)}
                    >
                      {isChecked && <CheckIcon width={18} height={18} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={S.categoryContainer}>
            <p className={S.categoryTitle}>가격 (시간 당)</p>
            <p className={S.price}>
              {priceRange[0].toLocaleString()}원 ~{' '}
              {priceRange[1].toLocaleString()}원
            </p>
            <Range
              values={priceRange}
              onChange={(vals) => setPriceRange(vals)}
              min={0}
              max={250000}
              step={5000}
              renderTrack={({ props, children }) => {
                const values = priceRange;
                return (
                  <div
                    className={S.track}
                    {...props}
                    style={{
                      background: getTrackBackground({
                        values,
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
                );
              }}
              renderThumb={({ props }) => (
                <div className={S.thumb} {...props} />
              )}
            />
          </div>
          <div className={S.categoryContainer}>
            <p className={S.categoryTitle}>지역</p>
            <div className={S.selectAreaContainer}>
              <button
                className={S.allAreaBtn({ selected: areaItems.length === 0 })}
                onClick={() => setAreaItems([])}
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
                      onClick={() => {
                        setAreaItems((prev) => {
                          const isSelected = prev.includes(district);

                          if (isSelected) {
                            return prev.filter((item) => item !== district);
                          } else {
                            return [...prev, district];
                          }
                        });
                      }}
                    >
                      {district}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
