import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { TodoWasCreatedEvent } from '../../../domain/todo/events/todoWasCreated.event';

@EventsHandler(TodoWasCreatedEvent)
export class TodoWasCreatedProjection
  implements IEventHandler<TodoWasCreatedEvent>
{
  async handle(event: TodoWasCreatedEvent) {
    console.log('Receiving event\n\n');

    console.log('Event Handled', event);
  }
}
