import {
  CommandHandler,
  ICommandHandler,
} from '@tokilabs/nestjs-eventsourcing';
import { RemoveTodoCommand } from '../definition/';

@CommandHandler(RemoveTodoCommand)
export class RemoveTodoHandler implements ICommandHandler<RemoveTodoCommand> {
  async handle(command: RemoveTodoCommand) {
    // TODO: Create Remove todo handler
    console.log('RemoveTodoCommand Handler', command);
    return 1;
  }
}
