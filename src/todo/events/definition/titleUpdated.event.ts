import { IEvent } from '@tokilabs/nestjs-eventsourcing';

export class TitleUpdatedEvent implements IEvent {
  public readonly done = true;
}
