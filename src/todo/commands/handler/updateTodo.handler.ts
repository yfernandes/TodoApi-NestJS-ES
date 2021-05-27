import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTodoCommand } from './../definition/';

@CommandHandler(UpdateTodoCommand)
export class UpdateTodoHandler implements ICommandHandler<UpdateTodoCommand> {
  async execute(command: UpdateTodoCommand) {
    console.log('UpdateNewTodo Handler', command);
    return 1;
  }
}
