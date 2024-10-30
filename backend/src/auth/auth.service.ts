import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user == null) {
      throw new UnauthorizedException('Invalid email');
    }

    const passwordMatch = (await bcrypt.compare(
      pass,
      user.password,
    )) as boolean;
    if (!passwordMatch) {
      throw new UnauthorizedException('Incorrect password');
    } else {
      delete user.password;
      return user;
    }
  }

  async signUp(user: CreateUserDto) {
    const existingUser = await this.usersService.findByEmail(user.email);
    if (existingUser) {
      throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
    }
    const harshedPW = await bcrypt.hash(user.password, 10);
    const newUser: CreateUserDto = {
      ...user,
      password: harshedPW,
    };

    const registeredUser = await this.usersService.create(newUser);

    delete registeredUser.password;

    return registeredUser;
  }
}
