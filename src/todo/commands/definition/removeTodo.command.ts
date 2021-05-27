import { ICommand } from '@nestjs/cqrs';

export class RemoveTodoCommand implements ICommand {
  constructor(private readonly id: string) {}
}
