import {
  DomainEvent,
  NanoGuidIdentity,
  IDomainEvent,
} from '@tokilabs/nestjs-eventsourcing/';

@DomainEvent('todo.events.TodoCreatedEvent')
export class TodoCreatedEvent implements IDomainEvent {
  constructor(
    public readonly id: NanoGuidIdentity,
    public readonly title: string,
    public readonly description: string,
    public readonly done: boolean,
  ) {}
}
