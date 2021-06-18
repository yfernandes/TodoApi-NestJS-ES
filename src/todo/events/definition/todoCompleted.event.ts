import {
  IDomainEvent,
  NanoGuidIdentity,
  DomainEvent,
} from '@tokilabs/nestjs-eventsourcing/';

@DomainEvent('todo.events.TodoCompletedEvent')
export class TodoCompletedEvent implements IDomainEvent {
  public readonly done = true;
  constructor(public readonly id: NanoGuidIdentity) {}
}
