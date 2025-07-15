export const convertDateTimeValueToISO = (
  value: { date: string; hour: number; minute: string },
  baseYear: number
): string => {
  const [monthStr, dayStrWithRest] = value.date.split('.');
  const month = parseInt(monthStr, 10) - 1;
  const day = parseInt(dayStrWithRest.trim().split(' ')[0], 10);

  const dateObj = new Date(
    baseYear,
    month,
    day,
    value.hour,
    parseInt(value.minute)
  );
  return dateObj.toISOString();
};
