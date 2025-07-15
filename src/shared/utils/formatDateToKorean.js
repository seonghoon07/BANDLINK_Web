export const formatDateToKorean = (dateStr) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1; // 0부터 시작하니까 +1
    const day = date.getDate();
    const weekdayFormatter = new Intl.DateTimeFormat('ko-KR', { weekday: 'short' });
    const weekday = weekdayFormatter.format(date);
    return `${month}월 ${day}일 (${weekday})`;
};
