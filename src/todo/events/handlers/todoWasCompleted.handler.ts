import { EventsHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { TodoWasCompleted } from '../todoWasCompleted.event';

@EventsHandler(TodoWasCompleted)
export class todoWasCompletedHandler
  implements IEventHandler<TodoWasCompleted>
{
  handle(event: TodoWasCompleted) {
    console.log(event);
    return null;
  }
}
