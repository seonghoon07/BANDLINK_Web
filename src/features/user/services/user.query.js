import { useQuery } from '@tanstack/react-query';
import { userKeys } from '@/features/user/services/user.key';
import { getUser } from '@/features/user/services/user.api';
export const useUser = () => {
    return useQuery({
        queryKey: [userKeys.user],
        queryFn: getUser,
    });
};
