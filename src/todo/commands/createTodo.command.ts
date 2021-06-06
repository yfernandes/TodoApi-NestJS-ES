import { ICommand } from '@tokilabs/nestjs-eventsourcing';
import { CreateTodoDto } from '../dtos/createTodo.dto';

export class CreateTodoCommand implements ICommand {
  constructor(public readonly data: CreateTodoDto) {}
}
