import { ICommand } from '@tokilabs/nestjs-eventsourcing';

export class RemoveTodoCommand implements ICommand {
  constructor(private readonly todoId: string) {}
}
