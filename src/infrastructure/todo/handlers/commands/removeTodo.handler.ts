import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveTodoCommand } from 'src/domain/todo/commands';

@CommandHandler(RemoveTodoCommand)
export class RemoveTodoHandler implements ICommandHandler<RemoveTodoCommand> {
  async execute(command: RemoveTodoCommand) {
    // TODO: Create Remove todo handler
    console.log('RemoveTodoCommand Handler', command);
    return 1;
  }
}
