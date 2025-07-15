export const calculateUsedHours = (start, end) => {
    const diffInMs = end.getTime() - start.getTime();
    const diffInMinutes = diffInMs / (1000 * 60);
    const usedHours = Math.ceil(diffInMinutes / 60);
    return usedHours;
};
