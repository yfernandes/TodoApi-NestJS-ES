import { ICommand } from '@nestjs/cqrs';
import { UpdateTodoDto } from './../../dtos/updateTodo.dto';

export class UpdateTodoCommand implements ICommand {
  constructor(private readonly data: UpdateTodoDto) {}
}
