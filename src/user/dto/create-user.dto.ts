import { UserRole } from '@/schemas/user/user-role.enum';

export type ICreateUserDto = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role?: UserRole;
};
