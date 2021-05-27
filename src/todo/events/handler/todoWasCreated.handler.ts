import { TodoWasCreated } from '../definition/todoWasCreatedEvent';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(TodoWasCreated)
export class TodoWasCreatedHandler implements IEventHandler<TodoWasCreated> {
  async handle(event: TodoWasCreated) {
    console.log('Event Handled', event);
  }
}
