import { Todo } from "../todo.entity";

export interface ITodoRepository {
  getById(todoId: string): Promise<Todo | null>;
  save(todo: Todo): void;
}
