import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProfileThemesModule } from './profile-themes/profile-themes.module';

@Module({
  imports: [PrismaModule, ProfileThemesModule, UsersModule],
})
export class AppModule {}
