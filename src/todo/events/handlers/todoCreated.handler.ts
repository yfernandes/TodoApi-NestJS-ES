import { IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { EventsHandler } from '@tokilabs/nestjs-eventsourcing/dist/decorators/events-handler.decorator';

import { TodoCreatedEvent } from '../definition';

@EventsHandler(TodoCreatedEvent)
export class TodoWasCreatedHandler implements IEventHandler<TodoCreatedEvent> {
  handle(event: TodoCreatedEvent) {
    console.log('Event Handled', event);
    return null;
  }
}
