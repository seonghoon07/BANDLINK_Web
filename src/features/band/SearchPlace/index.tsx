import * as S from './style.css';
import NavigationBar from '@/components/layout/NavigationBar';
import theme from '@/shared/styles/theme.css';
import { SearchIcon, FilterIcon } from '@/assets';
import PlaceItem from '@/components/PlaceItem';

export default function SearchPlace() {
  return (
    <div className={S.container}>
      <div className={S.headerContainer}>
        <div className={S.searchWrapper}>
          <SearchIcon
            className={S.searchIcon}
            width={24}
            height={24}
            color={theme.gray['500']}
          />
          <input
            className={S.searchInput}
            placeholder="장소명으로 검색해보세요"
          />
        </div>
      </div>
      <div className={S.filterContainer}>
        <div className={S.filterBtnContainer}>
          <FilterIcon />
        </div>
      </div>
      <div className={S.placesContainer}>
        <PlaceItem
          imageUrl={'https://picsum.photos/200'}
          placename={'디어뮤직 스튜디오 24시간 무인 음악연습실&합주실'}
          address={'부산 남구 문현동'}
          type={'합주실'}
        />
        <PlaceItem
          imageUrl={'https://picsum.photos/200'}
          placename={'디어뮤직 스튜디오 24시간 무인 음악연습실&합주실'}
          address={'부산 남구 문현동'}
          type={'합주실'}
        />
        <PlaceItem
          imageUrl={'https://picsum.photos/200'}
          placename={'디어뮤직 스튜디오 24시간 무인 음악연습실&합주실'}
          address={'부산 남구 문현동'}
          type={'합주실'}
        />
      </div>
      <NavigationBar />
    </div>
  );
}
