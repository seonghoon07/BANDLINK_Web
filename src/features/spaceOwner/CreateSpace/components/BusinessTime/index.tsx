import * as S from './style.css';
import BusinessTimePicker from '@/features/spaceOwner/CreateSpace/components/BusinessTimePicker';
import { ArrowCenterIcon } from '@/assets';
import { useState } from 'react';
import { SelectedTimeType } from '@/shared/types';

type selectedTimesType = {
  open: SelectedTimeType;
  close: SelectedTimeType;
};

type BusinessTimeProps = {
  selectedTimes: selectedTimesType;
  setSelectedTimes: React.Dispatch<React.SetStateAction<selectedTimesType>>;
};

export default function BusinessTime({
  selectedTimes,
  setSelectedTimes,
}: BusinessTimeProps) {
  const [isTimeClick, setIsTimeClick] = useState<{
    open: boolean;
    close: boolean;
  }>({ open: false, close: false });

  const toggleTimeClick = (type: 'open' | 'close') => {
    setIsTimeClick((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const renderTimePicker = (type: 'open' | 'close') => (
    <BusinessTimePicker
      onTimeChange={(hour, minute) => handleTimeChange(type, hour, minute)}
    />
  );

  const renderArrowIcon = (type: 'open' | 'close') => (
    <ArrowCenterIcon
      width={20}
      height={20}
      style={{
        transform: isTimeClick[type] ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
      }}
    />
  );

  const handleTimeChange = (
    type: 'open' | 'close',
    hour: string,
    minute: string
  ) => {
    setSelectedTimes((prev) => ({
      ...prev,
      [type]: { hour, minute },
    }));
  };

  return (
    <div className={S.categoryContainer}>
      <p className={S.categoryLabel}>영업시간</p>
      <div className={S.businessTimeContainer}>
        <div
          className={S.startTimeWrapper}
          onClick={() => toggleTimeClick('open')}
        >
          <p className={S.startTimeLabel}>영업 시작</p>
          <div className={S.timeWrapper}>
            <p
              className={S.time}
            >{`${selectedTimes.open.hour}시 ${selectedTimes.open.minute}분`}</p>
            {renderArrowIcon('open')}
          </div>
        </div>
        {isTimeClick.open && renderTimePicker('open')}
        <div
          className={S.startTimeWrapper}
          onClick={() => toggleTimeClick('close')}
        >
          <p className={S.startTimeLabel}>영업 종료</p>
          <div className={S.timeWrapper}>
            <p
              className={S.time}
            >{`${selectedTimes.close.hour}시 ${selectedTimes.close.minute}분`}</p>
            {renderArrowIcon('close')}
          </div>
        </div>
        {isTimeClick.close && renderTimePicker('close')}
      </div>
    </div>
  );
}
