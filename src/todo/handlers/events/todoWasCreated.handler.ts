import { IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { EventsHandler } from '@tokilabs/nestjs-eventsourcing/dist/decorators/events-handler.decorator';

import { TodoWasCreatedEvent } from '../../events/todoWasCreated.event';

@EventsHandler(TodoWasCreatedEvent)
export class TodoWasCreatedHandler
  implements IEventHandler<TodoWasCreatedEvent>
{
  handle(event: TodoWasCreatedEvent) {
    console.log('Event Handled', event);
    return null;
  }
}
