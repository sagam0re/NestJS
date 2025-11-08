import { UserDocument } from '@/schemas/user/user.schema';

export type IUser = Omit<UserDocument, 'passwordHash'> & { password: string };
