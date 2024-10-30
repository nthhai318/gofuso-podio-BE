import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  NotFoundException,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Public } from 'src/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Public()
  @Post('signup')
  async signUp(
    @Body() createUserDto: CreateUserDto,
    @Res() res,
  ): Promise<{ access_token: string }> {
    try {
      const user = await this.authService.signUp(createUserDto);
      const payload = {
        id: user.id,
        username: user.name,
        email: user.email,
      };
      return res
        .status(HttpStatus.OK)
        .json({ access_token: await this.jwtService.signAsync(payload) });
    } catch (error) {
      if (error instanceof HttpException) {
        return res.status(error.getStatus()).json({ message: error.message });
      } else {
        throw error;
      }
    }
  }

  @Public()
  @Post('signin')
  async signIn(
    @Body() credentials: { email: string; pass: string },
    @Res() res,
  ): Promise<{ access_token: string }> {
    try {
      const user = await this.authService.signIn(
        credentials.email,
        credentials.pass,
      );
      const payload = {
        id: user.id,
        username: user.name,
        email: user.email,
      };
      return res
        .status(HttpStatus.OK)
        .json({ access_token: await this.jwtService.signAsync(payload) });
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ message: error.message });
      } else if (error instanceof NotFoundException) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: error.message });
      } else {
        throw error;
      }
    }
  }
}
