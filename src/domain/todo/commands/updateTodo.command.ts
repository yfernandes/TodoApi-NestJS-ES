import { ICommand } from '@nestjs/cqrs';
import { UpdateTodoDto } from '../../../infrastructure/todo/dtos/updateTodo.dto';

export class UpdateTodoCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly data: UpdateTodoDto,
  ) {}
}
