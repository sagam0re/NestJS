import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IUser } from 'src/schemas/user/user.type';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    const user = await this.userService.createUser(createUserDto);
    return user;
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
