import {
  IDomainEvent,
  NanoGuidIdentity,
  DomainEvent,
} from '@tokilabs/nestjs-eventsourcing/';

@DomainEvent('todo.events.TitleUpdatedEvent')
export class TitleUpdatedEvent implements IDomainEvent {
  constructor(
    public readonly id: NanoGuidIdentity,
    public readonly title: string,
  ) {}
}
