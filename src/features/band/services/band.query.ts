import { useQuery } from '@tanstack/react-query';
import { bandKeys } from '@/features/band/services/band.key';
import { getPlaces } from '@/features/band/services/band.api';

export const usePlaces = () => {
  return useQuery({
    queryKey: [bandKeys.places],
    queryFn: getPlaces,
  });
};
