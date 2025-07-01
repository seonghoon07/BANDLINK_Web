import { fanKeys } from '@/features/fan/services/fan.key';
import {
  getPerformanceDetail,
  getPerformances,
} from '@/features/fan/services/fan.api';
import { useQuery } from '@tanstack/react-query';

export const usePerformances = () => {
  return useQuery({
    queryKey: [fanKeys.fanLivePerformance],
    queryFn: getPerformances,
  });
};

export const usePerformanceDetail = (performanceId: number) => {
  return useQuery({
    queryKey: [fanKeys.performanceDetail, performanceId],
    queryFn: () => getPerformanceDetail(performanceId),
  });
};
