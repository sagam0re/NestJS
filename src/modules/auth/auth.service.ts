import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IPayload } from '@/modules/auth/payload.type';
import { IUser } from '@/schemas/user/user.type';
import { comparePasswords } from '@/shared/hash-password';
import { UserService } from '@/modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<IUser | null> {
    const user = await this.userService.findOneByUsername(username);
    if (!user) {
      return null;
    }
    const passHashMatched = await comparePasswords(password, user.password);

    if (passHashMatched) {
      return user;
    }
    return null;
  }

  login(user: IUser) {
    const payload: IPayload = {
      username: user.username,
      sub: user._id,
      email: user.email,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
