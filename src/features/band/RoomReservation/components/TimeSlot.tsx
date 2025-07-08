import * as S from '../style.css';

type TimeSlotProps = {
  selectedRange: [number, number] | null;
  setSelectedRange: React.Dispatch<
    React.SetStateAction<[number, number] | null>
  >;
  unavailableHours: number[];
};

export default function TimeSlot({
  selectedRange,
  setSelectedRange,
  unavailableHours,
}: TimeSlotProps) {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const handleHourClick = (hour: number) => {
    if (!selectedRange) {
      setSelectedRange([hour, hour]);
    } else {
      const [start, end] = selectedRange;

      if (hour >= start && hour <= end) {
        setSelectedRange([hour, hour]);
      } else {
        const newStart = Math.min(hour, start);
        const newEnd = Math.max(hour, start);

        const hasUnavailable = unavailableHours.some(
          (unavailableHour) =>
            unavailableHour >= newStart && unavailableHour <= newEnd
        );

        if (hasUnavailable) {
          setSelectedRange([hour, hour]);
        } else {
          setSelectedRange([newStart, newEnd]);
        }
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
                    unavailableHours.includes(hour)
                      ? S.closed
                      : selectedRange &&
                          hour >= selectedRange[0] &&
                          hour <= selectedRange[1]
                        ? S.selected
                        : S.unselected,
                    isFirst && S.roundedLeft,
                    isLast && S.roundedRight,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={
                    unavailableHours.includes(hour)
                      ? undefined
                      : () => handleHourClick(hour)
                  }
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
