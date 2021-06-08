import { IEventHandler, EventsHandler } from '@tokilabs/nestjs-eventsourcing';

import { TodoCreatedEvent } from '../definition';

@EventsHandler(TodoCreatedEvent)
export class TodoWasCreatedHandler implements IEventHandler<TodoCreatedEvent> {
  handle(event: TodoCreatedEvent) {
    console.log('Event Handled', event);
    return null;
  }
}
