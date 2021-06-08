import { Module } from '@nestjs/common';
import { EventSourcingModule } from '@tokilabs/nestjs-eventsourcing/';

import { PrismaService } from '../shared/services/prisma.service';
import { TodoEventStore } from './data/todo.eventStore';

import { TodoController } from './todo.controller';
import { TodoCommandHandlers } from './commands/handlers';
import { TodoQueryHandlers } from './queries/handler';
import { TodoEventHandlers } from './events/handlers';
// import { TodoProjectionHandlers } from './projections';

@Module({
  // The order of imports matter!
  imports: [EventSourcingModule.register({})],
  controllers: [TodoController],
  providers: [
    TodoEventStore,
    ...TodoCommandHandlers,
    ...TodoQueryHandlers,
    ...TodoEventHandlers,
    // ...TodoProjectionHandlers,
    PrismaService,
  ],
})
export class TodoModule {}
