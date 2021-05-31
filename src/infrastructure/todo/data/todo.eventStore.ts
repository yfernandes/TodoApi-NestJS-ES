import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

import { EventStore } from '../../../shared/eventStore/eventstore';
import { ITodoRepository } from '../../../domain/todo/todo.repository';
import { Todo } from '../../../domain/todo/todo.entity';

@Injectable()
export class TodoEventStore implements ITodoRepository {
  constructor(
    private readonly eventStore: EventStore,
    private readonly publisher: EventPublisher,
  ) {}

  async get(todoId: string): Promise<Todo> {
    return this.eventStore.read(Todo, todoId);
  }

  async getEvents(todoId: string) {
    return this.eventStore.readEvents(todoId);
  }

  async find(todoId: string): Promise<Todo> | null {
    return this.eventStore.read(Todo, todoId);
  }

  save(todo: Todo): void {
    todo = this.publisher.mergeObjectContext(todo);
    todo.commit();
  }
}
