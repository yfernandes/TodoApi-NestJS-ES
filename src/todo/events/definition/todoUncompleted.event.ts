import {
  DomainEvent,
  NanoGuidIdentity,
  IDomainEvent,
} from '@tokilabs/nestjs-eventsourcing/';

@DomainEvent('todo.events.TodoUncompleted')
export class TodoUncompletedEvent implements IDomainEvent {
  constructor(public readonly id: NanoGuidIdentity) {}
}
