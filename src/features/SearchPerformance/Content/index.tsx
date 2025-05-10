import * as S from './style.css';
import { SearchIcon } from '@/assets';
import theme from '@/shared/styles/theme.css';
import PerformanceItem from '@/components/PerformanceItem';

export default function Content() {
  return (
    <div className={S.contentContainer}>
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
            placeholder="공연명, 밴드명으로 검색해보세요"
          />
        </div>
      </div>
      <div className={S.performanceWrapper}>
        <PerformanceItem
          image={'https://picsum.photos/300'}
          title={'집'}
          artist={'한로로'}
          price={12400}
        />
        <PerformanceItem
          image={'https://picsum.photos/300'}
          title={'집'}
          artist={'한로로'}
          price={12400}
        />
        <PerformanceItem
          image={'https://picsum.photos/300'}
          title={'집'}
          artist={'한로로'}
          price={12400}
        />
        <PerformanceItem
          image={'https://picsum.photos/300'}
          title={'집'}
          artist={'한로로'}
          price={12400}
        />
        <PerformanceItem
          image={'https://picsum.photos/300'}
          title={'집'}
          artist={'한로로'}
          price={12400}
        />
        <PerformanceItem
          image={'https://picsum.photos/300'}
          title={'집'}
          artist={'한로로'}
          price={12400}
        />
        <PerformanceItem
          image={'https://picsum.photos/300'}
          title={'집'}
          artist={'한로로'}
          price={12400}
        />
        <PerformanceItem
          image={'https://picsum.photos/300'}
          title={'집'}
          artist={'한로로'}
          price={12400}
        />
      </div>
    </div>
  );
}
