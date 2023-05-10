import { Module } from "@nestjs/common";

import { BootstrapModule } from "./bootstrap.module";
import { PrismaService } from "./shared/services/prisma.service";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [BootstrapModule, TodoModule],
  providers: [PrismaService],
})
export class AppModule {}
