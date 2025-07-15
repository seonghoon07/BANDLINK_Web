import { RoleType } from '@/shared/types/roleType';

export interface UserData {
  nickname: string;
  role: RoleType;
  bandname?: string;
}
