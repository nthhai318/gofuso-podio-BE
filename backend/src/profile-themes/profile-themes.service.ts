import { Injectable } from '@nestjs/common';
import { CreateProfileThemeDto } from './dto/create-profile-theme.dto';
import { UpdateProfileThemeDto } from './dto/update-profile-theme.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileThemesService {
  constructor(private prisma: PrismaService) {}

  async create(createProfileThemeDto: CreateProfileThemeDto) {
    return this.prisma.profileTheme.create({ data: createProfileThemeDto });
  }

  async findAllFromUserId(userId: number) {
    return this.prisma.profileTheme.findMany({ where: { userId } });
  }

  async update(id: number, updateProfileThemeDto: UpdateProfileThemeDto) {
    return this.prisma.profileTheme.update({
      where: { id },
      data: updateProfileThemeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.profileTheme.delete({ where: { id } });
  }
}
