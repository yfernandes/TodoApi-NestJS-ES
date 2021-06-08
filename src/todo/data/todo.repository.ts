import { Todo } from '../todo.entity';

export interface ITodoRepository {
  get(todoId: string): Promise<Todo>;
  getEvents(todoId: string): Promise<any[]>;
  find(todoId: string): Promise<Todo> | null;
  save(todo: Todo): void;
}
