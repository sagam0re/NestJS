import { Body, Controller, Get, Next, Post, Query } from '@nestjs/common';
import { IUser } from '@/schemas/user/user.type';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { UserService } from '@/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.createUser(createUserDto);

      return user;
    } catch {
      Next();
    }
  }

  @Get()
  async findAll(): Promise<IUser[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Get()
  async findByUsername(@Query('username') username: string): Promise<IUser[]> {
    const users = await this.userService.findByUsername(username);
    return users;
  }
}
