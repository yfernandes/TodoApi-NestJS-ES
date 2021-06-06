import { Injectable } from '@nestjs/common';

import { Todo } from '../todo.entity';
import { ITodoRepository } from '../todo.repository';

@Injectable()
export class TodoEventStore implements ITodoRepository {
  async get(todoId: string): Promise<Todo> {
    console.log(todoId);
    return;
  }

  async getEvents(todoId: string): Promise<any[]> {
    console.log(todoId);
    return [];
  }

  async find(todoId: string) {
    console.log('The todo id is:', todoId);
    return null;
  }

  save(todo: Todo): void {
    console.log(
      "Save Todo doesn't do anything yet, here is the argument by the way",
      todo,
    );
  }
}
