import { useMutation } from '@tanstack/react-query';
import { postPerformanceReserve } from '@/features/fan/services/fan.api';
export const usePerformanceReserveMutation = () => {
    return useMutation({
        mutationFn: postPerformanceReserve,
    });
};
