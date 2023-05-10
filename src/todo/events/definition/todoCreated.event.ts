import {
  DomainEvent,
  NanoGuidIdentity,
  IEvent,
} from "@tokilabs/nestjs-event-sourcing/";

@DomainEvent("todo.events.TodoCreatedEvent")
export class TodoCreatedEvent implements IEvent {
  constructor(
    public readonly id: NanoGuidIdentity,
    public readonly title: string,
    public readonly description: string,
    public readonly done: boolean
  ) {}
}
