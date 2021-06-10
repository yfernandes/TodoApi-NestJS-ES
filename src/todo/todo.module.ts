import { TodoEventsDefinition } from './events/definition/index';
import { Module } from '@nestjs/common';
import { EventSourcingModule } from '@tokilabs/nestjs-eventsourcing/';

import { PrismaService } from '../shared/services/prisma.service';
import { TodoEventStoreRepository } from './data/todo.eventStore';

import { TodoController } from './todo.controller';
import { TodoEventHandlers } from './events/handlers';
import { NanoGuidIdentity } from '@tokilabs/nestjs-eventsourcing/dist';
// import { TodoProjectionHandlers } from './projections';

@Module({
  // The order of imports matter!
  imports: [
    EventSourcingModule.register({
      eventsDefinition: [...TodoEventsDefinition],
    }),
  ],
  controllers: [TodoController],
  providers: [
    TodoEventStoreRepository,
    ...TodoEventHandlers,
    PrismaService,
    NanoGuidIdentity,
  ],
})
export class TodoModule {}
