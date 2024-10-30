import { IsBoolean, IsEmail, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  isActive?: boolean = false;
}
