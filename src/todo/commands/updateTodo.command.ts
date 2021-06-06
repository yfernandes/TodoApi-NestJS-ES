import { ICommand } from '@tokilabs/nestjs-eventsourcing';
import { UpdateTodoDto } from '../dtos/updateTodo.dto';

export class UpdateTodoCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly data: UpdateTodoDto,
  ) {}
}
