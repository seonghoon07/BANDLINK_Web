import { useEffect } from 'react';

export function usePastDateClass() {
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];

    document.querySelectorAll('.fc-daygrid-day').forEach((el) => {
      const date = el.getAttribute('data-date');
      if (date && date < today) {
        el.classList.add('fc-day-past');
      }
    });
  }, []);
}
