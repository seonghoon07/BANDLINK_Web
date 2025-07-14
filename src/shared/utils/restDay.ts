const dayMap: Record<string, string> = {
  Mon: '월',
  Tue: '화',
  Wed: '수',
  Thu: '목',
  Fri: '금',
  Sat: '토',
  Sun: '일',
};

const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const getKoreanOffDays = (businessDays: string[]): string[] => {
  return allDays
    .filter((day) => !businessDays.includes(day))
    .map((day) => dayMap[day]);
};
