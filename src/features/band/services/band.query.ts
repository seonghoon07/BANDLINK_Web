import { useQuery } from '@tanstack/react-query';
import { bandKeys } from '@/features/band/services/band.key';
import { getPlaceDetails, getPlaces } from '@/features/band/services/band.api';

export const usePlaces = () => {
  return useQuery({
    queryKey: [bandKeys.places],
    queryFn: getPlaces,
  });
};

export const usePlaceDetails = (placeId: string) => {
  return useQuery({
    queryKey: [bandKeys.placeDetail, placeId],
    queryFn: () => getPlaceDetails(placeId),
  });
};
