import { EventsHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';

import { TodoWasCreatedEvent } from '../events/todoWasCreated.event';

@EventsHandler(TodoWasCreatedEvent)
export class TodoWasCreatedProjection
  implements IEventHandler<TodoWasCreatedEvent>
{
  async handle(event: TodoWasCreatedEvent) {
    console.log('Receiving event\n\n');
    console.log('Event Handled', event);
    return null;
  }
}
