import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersModule],
  providers: [],
})
export class AppModule {}
