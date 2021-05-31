import { IEvent } from '@nestjs/cqrs';

export class TodoWasCompleted implements IEvent {
  public readonly done = true;
}
