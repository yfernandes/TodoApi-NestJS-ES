import { EventHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { TodoUncompletedEvent } from '../definition/';

@EventHandler(TodoUncompletedEvent)
export class TodoUncompletedHandler
  implements IEventHandler<TodoUncompletedEvent>
{
  handle(event: TodoUncompletedEvent) {
    console.log('Todo Uncompleted Event', event);
    return null;
  }
}
