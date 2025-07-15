import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');
export const formatPerformanceDate = (start, end) => {
    const s = dayjs(start);
    const e = dayjs(end);
    const format = (d) => d.format('YYYY.MM.DD(dd)');
    return s.isSame(e, 'day') ? format(s) : `${format(s)} - ${format(e)}`;
};
