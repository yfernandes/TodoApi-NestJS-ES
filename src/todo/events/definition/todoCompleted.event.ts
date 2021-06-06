import { IEvent } from '@tokilabs/nestjs-eventsourcing';

export class TodoCompletedEvent implements IEvent {
  public readonly done = true;
}
