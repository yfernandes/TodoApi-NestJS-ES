import { Module } from '@nestjs/common';
import { EventSourcingModule } from '@tokilabs/nestjs-eventsourcing/dist';

import { PrismaService } from '../shared/services/prisma.service';
import { TodoEventStore } from './data/todo.eventStore';

import { TodoController } from './todo.controller';
import { TodoCommandHandlers } from './commands/handlers';
import { TodoQueryHandlers } from './queries/handler';
// import { TodoProjectionHandlers } from './projections';

@Module({
  // The order of imports matter!
  imports: [EventSourcingModule],
  controllers: [TodoController],
  providers: [
    TodoEventStore,
    ...TodoCommandHandlers,
    ...TodoQueryHandlers,
    // ...TodoProjectionHandlers,
    PrismaService,
  ],
})
export class TodoModule {}
