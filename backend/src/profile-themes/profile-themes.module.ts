import { Module } from '@nestjs/common';
import { ProfileThemesService } from './profile-themes.service';
import { ProfileThemesController } from './profile-themes.controller';
import { PrismaModule } from './../prisma/prisma.module';

@Module({
  controllers: [ProfileThemesController],
  providers: [ProfileThemesService],
  imports: [PrismaModule],
})
export class ProfileThemesModule {}
