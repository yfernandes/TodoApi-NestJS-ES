import { Global, Module } from '@nestjs/common';

import { PrismaService } from './shared/services/prisma.service';
import { BootstrapModule } from './bootstrap.module';
// import { SandboxModule } from './sandbox/sandbox';
import { TodoModule } from './infrastructure/todo/todo.module';

@Global()
@Module({
  // imports: [SandboxModule],
  imports: [BootstrapModule, TodoModule],
  providers: [PrismaService],
})
export class AppModule {}
