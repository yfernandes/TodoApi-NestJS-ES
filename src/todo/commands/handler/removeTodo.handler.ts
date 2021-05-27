import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveTodoCommand } from './../definition/';

@CommandHandler(RemoveTodoCommand)
export class RemoveTodoHandler implements ICommandHandler<RemoveTodoCommand> {
  async execute(command: RemoveTodoCommand) {
    console.log('RemoveTodoCommand Handler', command);
    return 1;
  }
}
