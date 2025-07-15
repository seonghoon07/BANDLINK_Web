export const formatKoreanDatetime = (isoString) => {
    if (!isoString)
        return '-';
    const date = new Date(isoString);
    if (isNaN(date.getTime()))
        return '-';
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'Asia/Seoul',
    };
    const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
    const year = parts.find((p) => p.type === 'year')?.value;
    const month = parts.find((p) => p.type === 'month')?.value;
    const day = parts.find((p) => p.type === 'day')?.value;
    const hour = parts.find((p) => p.type === 'hour')?.value;
    const minute = parts.find((p) => p.type === 'minute')?.value.padStart(2, '0');
    const dayPeriod = parts.find((p) => p.type === 'dayPeriod')?.value;
    return `${year}.${month}.${day} ${dayPeriod} ${hour}시 ${minute}분`;
};
