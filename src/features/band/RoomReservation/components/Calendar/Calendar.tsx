import './style.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { DayCellContentArg, DayCellMountArg } from '@fullcalendar/core';
import { useEffect, useRef } from 'react';
import { usePastDateClass } from '@/shared/hooks/usePastDateClass';
import theme from '@/shared/styles/theme.css';

type CalendarProps = {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  unavailableDates: string[];
  setDateInfo: React.Dispatch<
    React.SetStateAction<{
      roomId: number;
      year: string;
      month: string;
    }>
  >;
};

export default function Calendar({
  selectedDate,
  setSelectedDate,
  unavailableDates,
}: CalendarProps) {
  const calendarRef = useRef(null);
  const lastSelectedEl = useRef<HTMLElement | null>(null);

  usePastDateClass();

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

        if (numberEl) numberEl.style.color = theme.gray['900'];

        lastSelectedEl.current = cell;
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [selectedDate, unavailableDates]);

  const dayCellContent = (info: DayCellContentArg) => {
    const dayNumber = info.dayNumberText.replace('일', '');
    return { html: `<span class="fc-daygrid-day-number">${dayNumber}</span>` };
  };

  const handleDateClick = (info: DateClickArg) => {
    const clickedDate = new Date(info.dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const clickedDateStr = info.dateStr;

    const isPast = clickedDate < today;
    const isUnavailable = unavailableDates.includes(clickedDateStr);
    const isOtherMonth = info.dayEl.classList.contains('fc-day-other');

    if (isPast || isUnavailable || isOtherMonth) return;

    setSelectedDate(clickedDateStr);

    if (lastSelectedEl.current) {
      lastSelectedEl.current.style.backgroundColor = '';
      const prevNumberEl = lastSelectedEl.current.querySelector(
        '.fc-daygrid-day-number span'
      ) as HTMLElement;
      if (prevNumberEl) prevNumberEl.style.color = '';
    }

    info.dayEl.style.backgroundColor = theme.yellow['500'];
    const numberEl = info.dayEl.querySelector(
      '.fc-daygrid-day-number span'
    ) as HTMLElement;
    if (numberEl) numberEl.style.color = theme.gray['900'];

    lastSelectedEl.current = info.dayEl;
  };

  const handleDayCellMount = (arg: DayCellMountArg) => {
    const dateStr = arg.date.toISOString().split('T')[0];
    const numberEl = arg.el.querySelector(
      '.fc-daygrid-day-number span'
    ) as HTMLElement;

    const isOtherMonth = arg.el.classList.contains('fc-day-other');
    const isUnavailable = unavailableDates.includes(dateStr);

    if (numberEl && (isOtherMonth || isUnavailable)) {
      numberEl.style.color = theme.gray['500'];
    }
  };

  return (
    <FullCalendar
      key={JSON.stringify(unavailableDates)}
      ref={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      timeZone="Asia/Seoul"
      locale="ko"
      height="auto"
      selectable
      dayCellContent={dayCellContent}
      dayCellDidMount={handleDayCellMount}
      dateClick={handleDateClick}
      headerToolbar={{ left: '', center: 'title', right: '' }}
    />
  );
}
