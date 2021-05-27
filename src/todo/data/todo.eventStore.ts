import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

import { EventStore } from '../../core/eventStore/eventstore';
import { ITodoRepository } from './todo.repository';
import { Todo } from '../entity/todo.entity';

@Injectable()
export class TodoEventStore implements ITodoRepository {
  constructor(
    private readonly eventStore: EventStore,
    private readonly publisher: EventPublisher,
  ) {}

  async get(todoId: string): Promise<Todo> {
    return this.eventStore.read(Todo, todoId);
  }

  async find(todoId: string): Promise<Todo> | null {
    return this.eventStore.read(Todo, todoId);
  }

  save(todo: Todo): void {
    todo = this.publisher.mergeObjectContext(todo);
    todo.commit();
  }
}
