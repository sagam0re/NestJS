import { IUser } from '@/user/type/user.type';

export interface IUserResponse {
  user: IUser & { token: string };
}
