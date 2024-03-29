import { EventHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { TodoCompletedEvent } from '../definition';

@EventHandler(TodoCompletedEvent)
export class TodoCompletedHandler implements IEventHandler<TodoCompletedEvent> {
  handle(event: TodoCompletedEvent) {
    console.log('Todo Completed Event', event);
    return null;
  }
}
