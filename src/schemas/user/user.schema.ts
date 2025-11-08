import { UserRole } from '@/schemas/user/user-role.enum';
import { Prop, Schema, SchemaFactory, Virtual } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [String], enum: UserRole, default: [UserRole.USER] })
  role: UserRole[];

  @Virtual()
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
export const UserSchema = SchemaFactory.createForClass(User);
