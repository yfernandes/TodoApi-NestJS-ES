import { EventsHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { TodoCompletedEvent } from '../definition';

@EventsHandler(TodoCompletedEvent)
export class todoWasCompletedHandler
  implements IEventHandler<TodoCompletedEvent>
{
  handle(event: TodoCompletedEvent) {
    console.log(event);
    return null;
  }
}
