import * as S from '../style.css';
import { useState } from 'react';

export default function TimeSlot() {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const [selectedRange, setSelectedRange] = useState<[number, number] | null>(
    null
  );

  const getSelectedTimeRange = (range: [number, number] | null) => {
    if (!range) return null;

    const [start, end] = range;
    const pad = (n: number) => String(n).padStart(2, '0');

    return {
      startTime: `${pad(start)}:00:00`,
      endTime: `${pad(end)}:59:59`,
    };
  };

  console.log(getSelectedTimeRange(selectedRange));

  const handleHourClick = (hour: number) => {
    if (!selectedRange) {
      setSelectedRange([hour, hour]);
    } else {
      const [start, end] = selectedRange;

      if (hour >= start && hour <= end) {
        setSelectedRange([hour, hour]);
      } else {
        const newStart = Math.min(hour, start);
        const newEnd = Math.max(hour, end);
        setSelectedRange([newStart, newEnd]);
      }
    }
  };

  return (
    <div className={S.timeSlotContainer}>
      <div className={S.timeSlotWrapper}>
        {hours.map((hour, index) => {
          const isFirst = index === 0;
          const isLast = index === hours.length - 1;

          return (
            <div key={hour} className={S.timeSlot}>
              {(hour === 0 || hour === 12) && (
                <p className={S.timeLabel}>{hour === 0 ? '오전' : '오후'}</p>
              )}
              <div className={S.timeBlockContainer}>
                <p className={S.time}>{hour}시</p>
                <div
                  key={hour}
                  className={[
                    S.timeBlock,
                    selectedRange &&
                    hour >= selectedRange[0] &&
                    hour <= selectedRange[1]
                      ? S.selected
                      : S.unselected,
                    isFirst && S.roundedLeft,
                    isLast && S.roundedRight,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => handleHourClick(hour)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={S.labelContainer}>
        <div className={S.labelWrapper}>
          <div className={S.labelColorBox.selected} />
          <p className={S.labelText}>선택됨</p>
        </div>
        <div className={S.labelWrapper}>
          <div className={S.labelColorBox.unselected} />
          <p className={S.labelText}>선택되지 않음</p>
        </div>
        <div className={S.labelWrapper}>
          <div className={S.labelColorBox.closed} />
          <p className={S.labelText}>마감됨</p>
        </div>
      </div>
    </div>
  );
}
