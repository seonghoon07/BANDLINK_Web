import { getCookie } from '@/shared/utils/cookie/cookie';
import { TOKEN } from '@/shared/constants';

export const getRefreshToken = () => getCookie(TOKEN.REFRESH);
