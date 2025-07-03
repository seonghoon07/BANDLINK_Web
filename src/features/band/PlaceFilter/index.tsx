import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import { CloseIcon } from '@/assets';
import { PlaceTypeFilter } from './components/PlaceTypeFilter';
import { PriceRangeFilter } from './components/PlaceRangeFilter';
import { AreaFilter } from './components/AreaFilter';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { placeFilterAtom } from '@/shared/store/placeFilterAtom';

export default function PlaceFilter() {
  const navigate = useNavigate();
  const placeTypes = ['합주실', '공연장'];
  const [filter, setFilter] = useAtom(placeFilterAtom);

  const toggleType = (type: string) => {
    const isSelected = filter.types.includes(type);
    const newTypes = isSelected
      ? filter.types.filter((t) => t !== type)
      : [...filter.types, type];
    setFilter({ ...filter, types: newTypes });
  };

  const toggleAreaItem = (district: string) => {
    const isSelected = filter.areas.includes(district);
    const newAreas = isSelected
      ? filter.areas.filter((area) => area !== district)
      : [...filter.areas, district];
    setFilter({ ...filter, areas: newAreas });
  };

  const resetFilters = () => {
    setFilter({
      types: [],
      priceRange: [0, 250000],
      areas: [],
    });
  };

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
            types={placeTypes}
            checkedTypes={filter.types}
            toggleType={toggleType}
          />
          <PriceRangeFilter
            priceRange={filter.priceRange}
            setPriceRange={(range: [number, number]) =>
              setFilter({ ...filter, priceRange: range })
            }
          />
          <AreaFilter
            areaItems={filter.areas}
            toggleAreaItem={toggleAreaItem}
            resetAreaItems={() => setFilter({ ...filter, areas: [] })}
          />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
