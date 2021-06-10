import { Module } from '@nestjs/common';

import { PrismaService } from './shared/services/prisma.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  providers: [PrismaService],
})
export class AppModule {}
