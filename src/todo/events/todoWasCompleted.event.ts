import { IEvent } from '@tokilabs/nestjs-eventsourcing';

export class TodoWasCompleted implements IEvent {
  public readonly done = true;
}
