import {
  Get,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  @Get()
  async findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    delete user.password;
    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password != null) {
      if (updateUserDto.password == '') {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      }
      const harshedPW = await bcrypt.hash(updateUserDto.password, 10);
      updateUserDto.password = harshedPW;
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    delete updatedUser.password;

    return updatedUser;
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
