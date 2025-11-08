import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '@/schemas/user/user.schema';
import { IUser } from '@/schemas/user/user.type';
import { hashPassword } from '@/shared/hash-password';
import { ICreateUserDto } from '@/user/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: ICreateUserDto): Promise<IUser> {
    createUserDto.password = await hashPassword(createUserDto.password, 12);
    const user = new this.userModel(createUserDto);
    const savedUser = await user.save();
    return savedUser;
  }

  async findByUsername(username: string): Promise<IUser[]> {
    const user = await this.userModel.findOne({ username });
    return user ? [user] : [];
  }

  async findOneByUsername(username: string): Promise<IUser | null> {
    const user = await this.userModel.findOne({ username });
    return user;
  }

  async findAll(): Promise<IUser[]> {
    const users = await this.userModel.find();
    return users;
  }
}
