import { IUser } from '@/schemas/user/user.type';

export type IPayload = {
  sub: IUser['_id'];
  username: string;
  email: string;
};
