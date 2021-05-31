import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TodoWasCompleted } from './../../../../domain/todo/events/todoWasCompleted.event';

@EventsHandler(TodoWasCompleted)
export class todoWasCompletedHandler
  implements IEventHandler<TodoWasCompleted>
{
  handle(event: TodoWasCompleted): void {
    console.log(event);
  }
}
