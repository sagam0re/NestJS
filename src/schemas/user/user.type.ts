import { UserDocument } from 'src/schemas/user/user.schema';

export type IUser = Omit<UserDocument, 'passwordHash'> & { password: string };
