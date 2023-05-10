import {
  IDomainEvent,
  NanoGuidIdentity,
  DomainEvent,
} from "@tokilabs/nestjs-event-sourcing/";

@DomainEvent("todo.events.DescriptionUpdatedEvent")
export class DescriptionUpdatedEvent implements IDomainEvent {
  constructor(
    public readonly id: NanoGuidIdentity,
    public readonly description: string
  ) {}
}
