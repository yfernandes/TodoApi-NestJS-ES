import { Todo } from 'src/domain/todo/todo.entity';

export interface ITodoRepository {
  get(todoId: string): Promise<Todo>;
  getEvents(todoId: string): Promise<any[]>;
  find(todoId: string): Promise<Todo> | null;
  save(todo: Todo): void;
}
