import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProfileThemesModule } from './profile-themes/profile-themes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, ProfileThemesModule, UsersModule, AuthModule],
})
export class AppModule {}
