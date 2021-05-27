import { TodoWasCreated } from '../events/definition/todoWasCreatedEvent';

import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(TodoWasCreated)
export class TodoWasCreatedProjection implements IEventHandler<TodoWasCreated> {
  async handle(event: TodoWasCreated) {
    console.log('Event Handled', event);
  }
}
