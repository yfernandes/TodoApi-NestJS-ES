import { NanoGuidIdentity } from '@tokilabs/nestjs-eventsourcing/dist';
import { Event, IEvent } from '@tokilabs/nestjs-eventsourcing';

@Event('TodoCreatedEvent')
export class TodoCreatedEvent implements IEvent {
  constructor(
    public readonly id: NanoGuidIdentity,
    public readonly title: string,
    public readonly description: string,
    public readonly done: boolean,
  ) {}
}
