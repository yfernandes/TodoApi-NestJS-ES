import { Todo } from 'src/todo/entity/todo.entity';

export interface ITodoRepository {
  get(todoId: string): Promise<Todo>;
  find(todoId: string): Promise<Todo> | null;
  save(todo: Todo): void;
}
