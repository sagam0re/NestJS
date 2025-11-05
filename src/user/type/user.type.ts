import { User } from '@/user/user.entity';

export type IUser = Omit<User, 'hashPassword'>;
