import * as S from './style.css';
import { SearchIcon } from '@/assets';
import theme from '@/shared/styles/theme.css';
import PerformanceItem from '@/components/PerformanceItem';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/layout/NavigationBar';
import { usePerformances } from '@/features/fan/services/fan.query';
import { PerformanceType } from '@/shared/types/performanceType';
import { useState } from 'react';
import Hangul from 'hangul-js';

export default function SearchPerformance() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const { data: performances } = usePerformances();

  const filteredPerformances = performances?.filter(
    (performance: PerformanceType) => {
      const keywordLower = keyword.toLowerCase();

      const title = performance.title ?? '';
      const band = performance.bandname ?? '';

      return (
        title.toLowerCase().includes(keywordLower) ||
        band.toLowerCase().includes(keywordLower) ||
        Hangul.search(title, keyword) > -1 ||
        Hangul.search(band, keyword) > -1
      );
    }
  );

  return (
    <div className={S.container}>
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
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </div>
        <div className={S.performanceWrapper}>
          {filteredPerformances?.map((performance: PerformanceType) => (
            <PerformanceItem
              key={performance.id}
              onClick={() => navigate(`/fan/performances/${performance.id}`)}
              image={performance.posterUrl}
              title={performance.title}
              artist={performance.bandname}
              price={performance.price}
            />
          ))}
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
