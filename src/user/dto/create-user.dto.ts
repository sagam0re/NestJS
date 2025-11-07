export type ICreateUserDto = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export class CreateUserDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
