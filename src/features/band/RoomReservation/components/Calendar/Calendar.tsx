import dayGridPlugin from '@fullcalendar/daygrid';
import './style.css';
import FullCalendar from '@fullcalendar/react';
import { usePastDateClass } from '@/shared/hooks/usePastDateClass';
import { useEffect, useRef } from 'react';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import theme from '@/shared/styles/theme.css';
import { DayCellContentArg } from '@fullcalendar/core';

type CalendarProps = {
  selectedDate: string;
  setSelectedDate: (selectedDate: string) => void;
};

export default function Calendar({
  selectedDate,
  setSelectedDate,
}: CalendarProps) {
  const calendarRef = useRef(null);
  const lastSelectedEl = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const cell = document.querySelector(
        `.fc-daygrid-day[data-date="${selectedDate}"]`
      ) as HTMLElement;

      if (cell) {
        cell.style.backgroundColor = theme.yellow['500'];

        const numberEl = cell.querySelector(
          '.fc-daygrid-day-number span'
        ) as HTMLElement;

        if (numberEl) {
          numberEl.style.color = theme.gray['900'];
        }

        lastSelectedEl.current = cell;
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [selectedDate]);

  usePastDateClass();

  const dayCellContent = (info: DayCellContentArg) => {
    const dayNumber = info.dayNumberText.replace('일', '');
    return { html: `<span class="fc-daygrid-day-number">${dayNumber}</span>` };
  };

  const handleDateClick = (info: DateClickArg) => {
    const clickedDate = new Date(info.dateStr);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    if (clickedDate < todayDate) return;

    setSelectedDate(info.dateStr);
    if (lastSelectedEl.current) {
      lastSelectedEl.current.style.backgroundColor = '';

      const oldNumberEl = lastSelectedEl.current.querySelector(
        '.fc-daygrid-day-number span'
      ) as HTMLElement;

      if (oldNumberEl) oldNumberEl.style.color = '';
    }

    info.dayEl.style.backgroundColor = theme.yellow['500'];
    const numberEl = info.dayEl.querySelector(
      '.fc-daygrid-day-number span'
    ) as HTMLElement;
    if (numberEl) numberEl.style.color = theme.gray['900'];
    lastSelectedEl.current = info.dayEl;
  };

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      timeZone="Asia/Seoul"
      locale="ko"
      dayCellContent={dayCellContent}
      height="auto"
      selectable
      dateClick={handleDateClick}
      headerToolbar={{
        left: '',
        center: 'prev title next',
        right: '',
      }}
    />
  );
}
