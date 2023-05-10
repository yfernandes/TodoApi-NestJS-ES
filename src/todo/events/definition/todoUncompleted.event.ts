import {
  DomainEvent,
  NanoGuidIdentity,
  IDomainEvent,
} from "@tokilabs/nestjs-event-sourcing/";

@DomainEvent("todo.events.TodoUncompleted")
export class TodoUncompletedEvent implements IDomainEvent {
  constructor(public readonly id: NanoGuidIdentity) {}
}
