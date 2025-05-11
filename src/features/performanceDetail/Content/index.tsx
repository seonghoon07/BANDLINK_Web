import * as S from './style.css';
import { ArrowIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';

export default function Content() {
  const navigate = useNavigate();
  return (
    <div className={S.contentContainer}>
      <div className={S.performanceContentContainer}>
        <div className={S.headerContainer}>
          <ArrowIcon width={24} height={24} onClick={() => navigate(-1)} />
        </div>
        <img
          className={S.performanceImg}
          src="https://picsum.photos/300"
          alt="공연 이미지"
        />
        <div className={S.infoContainer}>
          <div className={S.nameAndArtistWrapper}>
            <p className={S.performanceName}>집</p>
            <p className={S.artist}>한로로</p>
          </div>
          <div className={S.categoryContainer}>
            <p className={S.categoryName}>소개</p>
            <p className={S.categoryContent}>
              한로로의 두번째 앨범 발매를 맞아 단독 콘서트 ‘집’을 개최합니다.
              미움이라는 짐은 저기 내려두고 리모델링 된 집부터 둘러보시죠.
            </p>
          </div>
          <div className={S.categoryContainer}>
            <p className={S.categoryName}>장소</p>
            <p className={S.categoryContent}>
              노들섬 라이브하우스 (서울특별시 용산구 양녕로 445 (이촌동)
            </p>
          </div>
          <div className={S.categoryContainer}>
            <p className={S.categoryName}>기간</p>
            <p className={S.categoryContent}>2024.06.22(토) - 2024.06.23(일)</p>
          </div>
          <div className={S.categoryContainer}>
            <p className={S.categoryName}>가격</p>
            <p className={S.categoryContent}>
              <span className={S.price}>124,000원</span>
            </p>
          </div>
        </div>
      </div>
      <div className={S.reserveBtnContainer}>
        <Button type="button" color="primary" size="lg">
          예매하기
        </Button>
      </div>
    </div>
  );
}
