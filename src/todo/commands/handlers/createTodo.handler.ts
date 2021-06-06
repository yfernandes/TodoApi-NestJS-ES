import {
  CommandHandler,
  ICommandHandler,
  EventBus,
} from '@tokilabs/nestjs-eventsourcing';

import { Todo } from '../../todo.entity';
import { CreateTodoCommand } from '../definition';

@CommandHandler(CreateTodoCommand)
export class CreateTodoHandler implements ICommandHandler<CreateTodoCommand> {
  constructor(private readonly eventBus: EventBus) {}
  handle(command: CreateTodoCommand) {
    const { title, description, done } = command.data;

    console.log('merging');
    const todo = new Todo(title, description, done);
    todo.setBus(this.eventBus);

    todo.complete();
    return null;
  }
}
