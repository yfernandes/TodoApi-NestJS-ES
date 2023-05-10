import { IEventHandler, EventHandler } from "@tokilabs/nestjs-event-sourcing";
import { TodoCreatedEvent } from "../definition";

@EventHandler(TodoCreatedEvent)
export class TodoCreatedHandler implements IEventHandler<TodoCreatedEvent> {
  handle(event: TodoCreatedEvent) {
    console.log("Todo Created Event", event);
    return null;
  }
}
