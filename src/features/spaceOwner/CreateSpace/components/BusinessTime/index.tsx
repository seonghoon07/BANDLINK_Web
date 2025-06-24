import * as S from './style.css';
import BusinessTimePicker from '@/features/spaceOwner/CreateSpace/components/BusinessTimePicker';
import { ArrowCenterIcon } from '@/assets';
import { useState } from 'react';

type selectedTimeType = {
  hour: string;
  minute: string;
};

export default function BusinessTime() {
  const [selectedTimes, setSelectedTimes] = useState<{
    start: selectedTimeType;
    end: selectedTimeType;
  }>({
    start: { hour: '00', minute: '00' },
    end: { hour: '00', minute: '00' },
  });
  const [isTimeClick, setIsTimeClick] = useState<{
    start: boolean;
    end: boolean;
  }>({ start: false, end: false });

  const toggleTimeClick = (type: 'start' | 'end') => {
    setIsTimeClick((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const renderTimePicker = (type: 'start' | 'end') => (
    <BusinessTimePicker
      onTimeChange={(hour, minute) => handleTimeChange(type, hour, minute)}
    />
  );

  const renderArrowIcon = (type: 'start' | 'end') => (
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
    type: 'start' | 'end',
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
          onClick={() => toggleTimeClick('start')}
        >
          <p className={S.startTimeLabel}>영업 시작</p>
          <div className={S.timeWrapper}>
            <p
              className={S.time}
            >{`${selectedTimes.start.hour}시 ${selectedTimes.start.minute}분`}</p>
            {renderArrowIcon('start')}
          </div>
        </div>
        {isTimeClick.start && renderTimePicker('start')}
        <div
          className={S.startTimeWrapper}
          onClick={() => toggleTimeClick('end')}
        >
          <p className={S.startTimeLabel}>영업 종료</p>
          <div className={S.timeWrapper}>
            <p
              className={S.time}
            >{`${selectedTimes.end.hour}시 ${selectedTimes.end.minute}분`}</p>
            {renderArrowIcon('end')}
          </div>
        </div>
        {isTimeClick.end && renderTimePicker('end')}
      </div>
    </div>
  );
}
