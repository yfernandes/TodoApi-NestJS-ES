import { PrismaService } from './shared/services/prisma.service';
import { Global, Module } from '@nestjs/common';

import { BootstrapModule } from './bootstrap.module';
import { TodoModule } from './todo/todo.module';

@Global()
@Module({
  imports: [BootstrapModule, TodoModule],
  providers: [PrismaService],
})
export class AppModule {}
