import { IUser } from 'src/schemas/user/user.type';

export type IPayload = {
  sub: IUser['_id'];
  username: string;
  email: string;
};
