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

export default function SearchPlace() {
  const navigate = useNavigate();
  const [searchPlaceKeyword, setSearchPlaceKeyword] = useState('');
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

    return (
      name.toLowerCase().includes(keywordLower) ||
      Hangul.search(name, searchPlaceKeyword) > -1
    );
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
      </div>
      <div className={S.placesContainer}>
        {filteredPlaces?.map((place: PlaceType) => (
          <PlaceItem
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
