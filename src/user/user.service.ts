import { Repository } from 'typeorm';
import { CreateUserDto } from '@/user/dto/createUser.dto';
import { User } from '@/user/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserResponse } from '@/user/type/userResponse.interface';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {
  /**
   *
   */
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise<IUserResponse> {
    const user = this.userRepository.create(createUserDto);

    const savedUser = await this.userRepository.save(user);
    return this.generateUserResponse(savedUser);
  }

  generateToken(user: User): string {
    const token = sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
    );

    return token;
  }

  generateUserResponse(user: User): IUserResponse {
    return {
      user: {
        ...user,
        token: this.generateToken(user),
      },
    };
  }
}
