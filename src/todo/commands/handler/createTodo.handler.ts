import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Todo } from 'src/todo/entity/todo.entity';

import { TodoEventStore } from '../../data/todo.eventStore';
import { CreateTodoCommand } from '../definition';

@CommandHandler(CreateTodoCommand)
export class CreateTodoHandler implements ICommandHandler<CreateTodoCommand> {
  constructor(private readonly eventStore: TodoEventStore) {}
  async execute(command: CreateTodoCommand) {
    console.log('HandlerStart:\n', command);
    const { title, description, done } = command.data;
    const todo = Todo.add(title, description, done);

    console.log(todo);
    this.eventStore.save(todo);

    console.log('HandlerEnd.\n');
    return 1;
  }
}
