import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import theme from '@/shared/styles/theme.css';
import { SearchIcon, FilterIcon, CloseIcon } from '@/assets';
import PlaceItem from '@/components/PlaceItem';
import { useNavigate } from 'react-router-dom';
import { usePlaces } from '@/features/band/services/band.query';
import { PlaceType } from '@/shared/types/placeType';
import { useState } from 'react';
import Hangul from 'hangul-js';
import { useAtom } from 'jotai/index';
import { placeFilterAtom } from '@/shared/store/placeFilterAtom';

export default function SearchPlace() {
  const navigate = useNavigate();
  const [searchPlaceKeyword, setSearchPlaceKeyword] = useState('');
  const [placeFilter] = useAtom(placeFilterAtom);
  const { data: places } = usePlaces();

  const sortPlaceType = (types: string[]) => {
    return types
      .slice()
      .sort((a, b) => (a === '합주실' ? -1 : b === '합주실' ? 1 : 0))
      .join(', ');
  };

  const filteredPlaces = places?.filter((place: PlaceType) => {
    const keywordLower = searchPlaceKeyword.toLowerCase();
    const name = place.name ?? '';

    const matchesKeyword =
      name.toLowerCase().includes(keywordLower) ||
      Hangul.search(name, searchPlaceKeyword) > -1;

    const selectedTypes = placeFilter.types;
    const placeTypes = place.type;

    const matchesType =
      selectedTypes.length === 0
        ? true
        : selectedTypes.length === 1
          ? placeTypes.includes(selectedTypes[0])
          : selectedTypes.every((t) => placeTypes.includes(t));

    const matchesArea =
      placeFilter.areas.length === 0 ||
      placeFilter.areas.some((area) => place.address.includes(area));

    const matchesPrice = place.rooms?.some(
      (room) =>
        room.price >= placeFilter.priceRange[0] &&
        room.price <= placeFilter.priceRange[1]
    );

    return matchesKeyword && matchesType && matchesArea && matchesPrice;
  });

  return (
    <div className={S.container}>
      <div className={S.headerContainer}>
        <div className={S.searchWrapper}>
          {searchPlaceKeyword ? (
            <CloseIcon
              className={S.searchIcon}
              width={24}
              height={24}
              color={theme.gray['500']}
              onClick={() => setSearchPlaceKeyword('')}
            />
          ) : (
            <SearchIcon
              className={S.searchIcon}
              width={24}
              height={24}
              color={theme.gray['500']}
            />
          )}
          <input
            className={S.searchInput}
            placeholder="장소명으로 검색해보세요"
            value={searchPlaceKeyword}
            onChange={(e) => setSearchPlaceKeyword(e.target.value)}
          />
        </div>
      </div>
      <div className={S.filterContainer}>
        <div
          className={S.filterBtnContainer}
          onClick={() => navigate('/band/place/filter')}
        >
          <FilterIcon />
        </div>
        <div className={S.selectedFilterWrapper}>
          {placeFilter.types.length > 0 && (
            <div className={S.selectFilterContainer}>
              <p className={S.selectFilterText}>
                {placeFilter.types.join(', ')}
              </p>
            </div>
          )}
          {(placeFilter.priceRange[0] !== 0 ||
            placeFilter.priceRange[1] !== 250000) && (
            <div className={S.selectFilterContainer}>
              <p
                className={S.selectFilterText}
              >{`${placeFilter.priceRange[0].toLocaleString()}원 ~ ${placeFilter.priceRange[1].toLocaleString()}원`}</p>
            </div>
          )}
          {placeFilter.areas.length > 0 && (
            <div className={S.selectFilterContainer}>
              <p className={S.selectFilterText}>
                {`${placeFilter.areas.length}개의 지역`}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={S.placesContainer}>
        {filteredPlaces?.map((place: PlaceType) => (
          <PlaceItem
            key={place.id}
            imageUrl={place.imageUrl}
            placename={place.name}
            address={place.address}
            type={sortPlaceType(place.type)}
            onClick={() => navigate(`/band/place/${place.id}`)}
          />
        ))}
      </div>
      <NavigationBar />
    </div>
  );
}
