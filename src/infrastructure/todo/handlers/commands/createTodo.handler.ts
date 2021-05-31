import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Todo } from 'src/domain/todo/todo.entity';

import { TodoEventStore } from '../../data/todo.eventStore';
import { CreateTodoCommand } from '../../../../domain/todo/commands';

@CommandHandler(CreateTodoCommand)
export class CreateTodoHandler implements ICommandHandler<CreateTodoCommand> {
  constructor(
    private readonly eventStore: TodoEventStore,
    private readonly publisher: EventPublisher,
  ) {}
  async execute(command: CreateTodoCommand) {
    const { title, description, done } = command.data;

    console.log('merging');
    const todo = this.publisher.mergeObjectContext(
      await new Todo(title, description, done),
    );

    this.eventStore.save(todo);
    todo.complete();
    console.log('Commit 1', todo);

    todo.commit();
    return;
    if (todo.id) {
      const complete = this.publisher.mergeObjectContext(
        await this.eventStore.get(todo.id),
      );
      complete.complete();
      complete.commit();
    } else {
      console.log('Id not found');
    }
  }
}
