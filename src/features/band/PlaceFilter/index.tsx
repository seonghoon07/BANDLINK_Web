import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { CloseIcon } from '@/assets';
import { usePlaceFilter } from '@/shared/hooks/usePlaceFilter';
import { PlaceTypeFilter } from './components/PlaceTypeFilter';
import { PriceRangeFilter } from './components/PlaceRangeFilter';
import { AreaFilter } from './components/AreaFilter';
import { useNavigate } from 'react-router-dom';

export default function PlaceFilter() {
  const navigate = useNavigate();
  const {
    checkedTypes,
    priceRange,
    areaItems,
    toggleType,
    toggleAreaItem,
    resetFilters,
    setPriceRange,
    setAreaItems,
  } = usePlaceFilter();

  return (
    <div className={S.container}>
      <div className={S.filterContainer}>
        <header className={S.filterHeader}>
          <CloseIcon onClick={() => navigate(-1)} />
          <p className={S.headerText}>필터</p>
          <p className={S.resetText} onClick={resetFilters}>
            초기화
          </p>
        </header>
        <div className={S.filterContentWrapper}>
          <PlaceTypeFilter
            types={['합주실', '소극장']}
            checkedTypes={checkedTypes}
            toggleType={toggleType}
          />
          <PriceRangeFilter
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <AreaFilter
            areaItems={areaItems}
            toggleAreaItem={toggleAreaItem}
            resetAreaItems={() => setAreaItems([])}
          />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
