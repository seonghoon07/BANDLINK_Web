import { useMutation } from '@tanstack/react-query';
import { postCreatePlace } from '@/features/spaceOwner/services/spaceOwner.api';
export const useCreatePlace = () => {
    return useMutation({
        mutationFn: postCreatePlace,
    });
};
