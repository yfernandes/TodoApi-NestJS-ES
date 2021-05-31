import { ICommand } from '@nestjs/cqrs';
import { CreateTodoDto } from '../../../infrastructure/todo/dtos/createTodo.dto';

export class CreateTodoCommand implements ICommand {
  constructor(public readonly data: CreateTodoDto) {}
}
