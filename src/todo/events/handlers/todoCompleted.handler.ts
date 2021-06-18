import { EventsHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { TodoCompletedEvent } from '../definition';

@EventsHandler(TodoCompletedEvent)
export class TodoCompletedHandler implements IEventHandler<TodoCompletedEvent> {
  handle(event: TodoCompletedEvent) {
    console.log('Todo Completed Event', event);
    return null;
  }
}
