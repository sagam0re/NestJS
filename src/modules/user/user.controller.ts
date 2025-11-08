import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { IUser } from '@/schemas/user/user.type';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { UserService } from '@/modules/user/user.service';
import { UpdateUserDto } from '@/modules/user/dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);

    return user;
  }

  @Put('update')
  async updateUser(
    @Query('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.userService.updateUser(userId, updateUserDto);
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
