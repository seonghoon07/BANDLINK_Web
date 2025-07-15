import { fanKeys } from '@/features/fan/services/fan.key';
import { getPerformanceDetail, getPerformances, getReserveHistory, } from '@/features/fan/services/fan.api';
import { useQuery } from '@tanstack/react-query';
export const usePerformances = () => {
    return useQuery({
        queryKey: [fanKeys.fanLivePerformance],
        queryFn: getPerformances,
    });
};
export const usePerformanceDetail = (performanceId) => {
    return useQuery({
        queryKey: [fanKeys.performanceDetail, performanceId],
        queryFn: () => getPerformanceDetail(performanceId),
    });
};
export const useReserveHistory = () => {
    return useQuery({
        queryKey: [fanKeys.reserveHistory],
        queryFn: getReserveHistory,
    });
};
