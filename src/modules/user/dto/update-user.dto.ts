import { IsOptional, IsString, IsArray, ValidateIf } from 'class-validator';
import { UserRole } from '@/schemas/user/user-role.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsArray()
  role?: UserRole[];

  @ValidateIf(
    (o: UpdateUserDto) => o.oldPassword !== undefined && o.oldPassword !== '',
  )
  @IsString({
    message: 'New password is required when old password is provided',
  })
  password?: string;

  @ValidateIf(
    (o: UpdateUserDto) => o.password !== undefined && o.password !== '',
  )
  @IsString({
    message: 'Old password is required when new password is provided',
  })
  oldPassword?: string;
}
