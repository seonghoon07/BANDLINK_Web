import { RoleType } from '@/shared/types/roleType';

export interface UserData {
  nickname: string;
  role: RoleType | null;
  bandname?: string;
}
