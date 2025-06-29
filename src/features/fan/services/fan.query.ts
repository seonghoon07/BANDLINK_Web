import { fanKeys } from '@/features/fan/services/fan.key';
import { getPerformances } from '@/features/fan/services/fan.api';
import { useQuery } from '@tanstack/react-query';

export const usePerformances = () => {
  return useQuery({
    queryKey: [fanKeys.fanLivePerformance],
    queryFn: getPerformances,
  });
};
