import { useEffect, useMemo } from 'react';
import * as S from './style.css';
import Picker from 'react-mobile-picker';
import { useAtom } from 'jotai';
import {
  rentalStartTimeAtom,
  rentalEndTimeAtom,
  DateTimeValue,
} from '@/shared/store/atom';

type Props = {
  type: 'start' | 'end';
};

const formatDateKey = (d: Date) =>
  `4.${d.getDate()}. (${['일', '월', '화', '수', '목', '금', '토'][d.getDay()]})`;

const generateTimeMap = (start: Date, end: Date) => {
  const result: {
    [dateKey: string]: {
      hour: number[];
      minuteMap: { [h: number]: string[] };
    };
  } = {};

  const cur = new Date(start);
  cur.setSeconds(0);
  cur.setMilliseconds(0);

  while (cur <= end) {
    const dateKey = formatDateKey(cur);
    const h = cur.getHours();
    const m = cur.getMinutes() < 30 ? '00' : '30';

    if (!result[dateKey]) {
      result[dateKey] = { hour: [], minuteMap: {} };
    }
    if (!result[dateKey].hour.includes(h)) {
      result[dateKey].hour.push(h);
      result[dateKey].minuteMap[h] = [];
    }
    if (!result[dateKey].minuteMap[h].includes(m)) {
      result[dateKey].minuteMap[h].push(m);
    }

    cur.setMinutes(cur.getMinutes() + 30);
  }

  return result;
};

export default function DateTimePicker({ type }: Props) {
  const start = new Date('2025-04-02T13:30:00');
  const end = new Date('2025-04-03T02:00:00');
  const timeMap = useMemo(() => generateTimeMap(start, end), []);
  const dateKeys = Object.keys(timeMap);

  // Atom 연결
  const [startTime, setStartTime] = useAtom(rentalStartTimeAtom);
  const [endTime, setEndTime] = useAtom(rentalEndTimeAtom);

  const value = type === 'start' ? startTime : endTime;
  const setValue = type === 'start' ? setStartTime : setEndTime;

  // fallback (초기 상태)
  const getInitialState = (): DateTimeValue => {
    const date = dateKeys[0];
    const hour = timeMap[date].hour[0];
    const minute = timeMap[date].minuteMap[hour][0];
    return { date, hour, minute };
  };

  const current = value || getInitialState();

  // 날짜/시간 바뀔 때 minute 값 보정
  useEffect(() => {
    const { date, hour, minute } = current;

    const validHours = timeMap[date]?.hour || [];
    const newHour = validHours.includes(hour) ? hour : validHours[0];

    const validMinutes = timeMap[date]?.minuteMap?.[newHour] || [];
    const newMinute = validMinutes.includes(minute) ? minute : validMinutes[0];

    if (hour !== newHour || minute !== newMinute) {
      setValue({
        ...current,
        hour: newHour,
        minute: newMinute,
      });
    }
  }, [current.date, current.hour]);

  return (
    <Picker
      value={current}
      onChange={setValue}
      wheelMode="normal"
      itemHeight={40}
      height={120}
    >
      <Picker.Column name="date">
        {dateKeys.map((d) => (
          <Picker.Item key={d} value={d}>
            {({ selected }) => (
              <div className={`${S.item} ${selected ? S.selected : ''}`}>
                {d}
              </div>
            )}
          </Picker.Item>
        ))}
      </Picker.Column>

      <Picker.Column name="hour">
        {timeMap[current.date]?.hour.map((h) => (
          <Picker.Item key={h} value={h}>
            {({ selected }) => (
              <div className={`${S.item} ${selected ? S.selected : ''}`}>
                {h}
              </div>
            )}
          </Picker.Item>
        ))}
      </Picker.Column>

      <Picker.Column name="minute">
        {(timeMap[current.date]?.minuteMap?.[current.hour] || []).map((m) => (
          <Picker.Item key={m} value={m}>
            {({ selected }) => (
              <div className={`${S.item} ${selected ? S.selected : ''}`}>
                {m}
              </div>
            )}
          </Picker.Item>
        ))}
      </Picker.Column>
    </Picker>
  );
}
