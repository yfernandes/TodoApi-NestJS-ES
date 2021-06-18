import { EventsHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { TodoUncompletedEvent } from '../definition/';

@EventsHandler(TodoUncompletedEvent)
export class TodoUncompletedHandler
  implements IEventHandler<TodoUncompletedEvent>
{
  handle(event: TodoUncompletedEvent) {
    console.log('Todo Uncompleted Event', event);
    return null;
  }
}
