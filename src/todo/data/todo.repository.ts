import { Todo } from '../todo.entity';

export interface ITodoRepository {
  getById(todoId: string): Promise<Todo>;
  save(todo: Todo): void;
}

/* 
export interface ITodoRepository {
  getById(id: Guid): Promise<Todo>;
  save(todo: Todo): Promise<IDomainEvent[]>;
}
 */
