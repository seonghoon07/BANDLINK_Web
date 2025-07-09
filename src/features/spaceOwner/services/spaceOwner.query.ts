import { useQuery } from '@tanstack/react-query';
import { spaceOwnerKeys } from '@/features/spaceOwner/services/spaceOwner.key';
import { getReserveInfo } from '@/features/spaceOwner/services/spaceOwner.api';

export const useReserveInfo = () => {
  return useQuery({
    queryKey: [spaceOwnerKeys.reserveInfo],
    queryFn: getReserveInfo,
  });
};
