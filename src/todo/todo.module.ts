import { Module } from "@nestjs/common";

import { PrismaService } from "../shared/services/prisma.service";
import { TodoEventStoreRepository } from "./data/todo.eventStore";

import { TodoController } from "./todo.controller";
import { TodoEventHandlers } from "./events/handlers";
import { TodoProjectionHandlers } from "./data/projections";

@Module({
  controllers: [TodoController],
  providers: [
    TodoEventStoreRepository,
    ...TodoEventHandlers,
    ...TodoProjectionHandlers,
    PrismaService,
  ],
})
export class TodoModule {}
