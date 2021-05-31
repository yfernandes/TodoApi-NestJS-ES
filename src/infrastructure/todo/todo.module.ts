import { todoWasCompletedHandler } from './handlers/events/todoWasCompleted.handler';
import { Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { EventStoreModule, EventStore } from '../../shared/eventStore';
import { PrismaService } from '../../shared/services/prisma.service';
import { TodoEventStore } from './data/todo.eventStore';

import { TodoController } from './todo.controller';
import { TodoCommandHandlers } from './handlers/commands';
import { TodoQueryHandlers } from './handlers/query';
// import { TodoProjectionHandlers } from './projections';
import { TodoEvents } from '../../domain/todo/events';
import { TodoWasCreatedHandler } from './handlers/events/todoWasCreated.handler';

@Module({
  // The order of imports matter!
  imports: [CqrsModule, EventStoreModule.forRoot()],
  controllers: [TodoController],
  providers: [
    TodoEventStore,
    ...TodoCommandHandlers,
    ...TodoQueryHandlers,
    TodoWasCreatedHandler,
    todoWasCompletedHandler,
    // ...TodoProjectionHandlers,
    PrismaService,
  ],
})
export class TodoModule implements OnModuleInit {
  constructor(private readonly eventStore: EventStore) {
    console.log('Constructing Todo module');
  }

  onModuleInit() {
    console.log('Adding Event Handlers');
    // this.eventStore.addEventHandlers(TodoEvents);
  }
}
