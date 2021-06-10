import { Inject, Injectable } from '@nestjs/common';
import {
  EventBus,
  EventStoreRepository,
  EventStore,
  IEventStore,
} from '@tokilabs/nestjs-eventsourcing/';

import { Todo } from '../todo.entity';
import { ITodoRepository } from './todo.repository';
// implements ITodoRepository

@Injectable()
export class TodoEventStoreRepository extends EventStoreRepository<Todo> {
  constructor(
    @Inject(EventStore) protected storage: IEventStore,
    @Inject(EventBus) eventBus: EventBus,
  ) {
    super(Todo, storage, eventBus);
  }
}
