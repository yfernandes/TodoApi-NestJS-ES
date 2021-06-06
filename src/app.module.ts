import { Module } from '@nestjs/common';

import { PrismaService } from './shared/services/prisma.service';
import { BootstrapModule } from './bootstrap.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [BootstrapModule, TodoModule],

  providers: [PrismaService],
})
export class AppModule {}
