import { useState } from 'react';
import * as S from './style.css';
import Picker from 'react-mobile-picker';

type Props = {
  onTimeChange: (hour: string, minute: string) => void;
};

export default function BusinessTimePicker({ onTimeChange }: Props) {
  const [time, setTime] = useState({ hour: '00', minute: '00' });

  const handlePickerChange = (newValue: { hour: string; minute: string }) => {
    setTime({
      hour: newValue.hour,
      minute: newValue.minute,
    });
    onTimeChange(newValue.hour, newValue.minute);
  };

  return (
    <div style={{ width: '220px' }}>
      <Picker
        value={time}
        onChange={handlePickerChange}
        wheelMode="normal"
        itemHeight={40}
        height={120}
      >
        <Picker.Column name="hour">
          {Array.from({ length: 24 }).map((_, index) => (
            <Picker.Item key={index} value={index < 10 ? `0${index}` : `${index}`}>
              {({ selected }) => (
                <div className={`${S.item} ${selected ? S.selected : ''}`}>
                  {index < 10 ? `0${index}` : index}
                </div>
              )}
            </Picker.Item>
          ))}
        </Picker.Column>

        <Picker.Column name="minute">
          {['00', '30'].map((m) => (
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
    </div>
  );
}
