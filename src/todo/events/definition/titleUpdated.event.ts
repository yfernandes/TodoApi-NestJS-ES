import {
  IDomainEvent,
  NanoGuidIdentity,
  DomainEvent,
} from "@tokilabs/nestjs-event-sourcing/";

@DomainEvent("todo.events.TitleUpdatedEvent")
export class TitleUpdatedEvent implements IDomainEvent {
  constructor(
    public readonly id: NanoGuidIdentity,
    public readonly title: string
  ) {}
}
