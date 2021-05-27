import { Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { EventStoreModule, EventStore } from '../core/eventStore/';
import { PrismaService } from './../shared/services/prisma.service';
import { TodoEventStore } from './data/todo.eventStore';

import { TodoController } from './todo.controller';
import { TodoCommandHandlers } from './commands/handler/';
import { TodoQueryHandlers } from './query/handler';
import { TodoProjectionHandlers } from './projections/';
import { TodoEvents } from './events/definition';

@Module({
  controllers: [TodoController],
  // The order of imports matter!
  imports: [CqrsModule, EventStoreModule.forRoot()],
  providers: [
    ...TodoCommandHandlers,
    ...TodoQueryHandlers,
    ...TodoProjectionHandlers,
    TodoEventStore,
    PrismaService,
    // Todo Providers
  ],
})
export class TodoModule implements OnModuleInit {
  constructor(private readonly eventStore: EventStore) {}
  onModuleInit() {
    this.eventStore.addEventHandlers(TodoEvents);
  }
}
