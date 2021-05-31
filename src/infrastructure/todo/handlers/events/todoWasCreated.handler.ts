import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';

import { TodoWasCreatedEvent } from '../../../../domain/todo/events/todoWasCreated.event';

@EventsHandler(TodoWasCreatedEvent)
export class TodoWasCreatedHandler
  implements IEventHandler<TodoWasCreatedEvent>
{
  handle(event: TodoWasCreatedEvent) {
    console.log('Event Handled', event);
  }
}
