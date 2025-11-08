import { UserRole } from '@/schemas/user/user-role.enum';
import { IUser } from '@/schemas/user/user.type';

export type IPayload = {
  sub: IUser['_id'];
  username: string;
  email: string;
  role: UserRole[];
};
