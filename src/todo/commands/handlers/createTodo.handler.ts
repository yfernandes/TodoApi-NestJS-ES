import {
  CommandHandler,
  ICommandHandler,
} from '@tokilabs/nestjs-eventsourcing';
import { Todo } from '../../todo.entity';

import { CreateTodoCommand } from '..';

@CommandHandler(CreateTodoCommand)
export class CreateTodoHandler implements ICommandHandler<CreateTodoCommand> {
  handle(command: CreateTodoCommand) {
    const { title, description, done } = command.data;

    console.log('merging');
    const todo = new Todo(title, description, done);

    todo.complete();
    return null;
  }
}
