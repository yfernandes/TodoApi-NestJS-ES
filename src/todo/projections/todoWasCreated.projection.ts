import {
  ProjectionHandler,
  IEventHandler,
} from '@tokilabs/nestjs-eventsourcing';

import { TodoWasCreatedEvent } from '../events/todoWasCreated.event';

@ProjectionHandler(TodoWasCreatedEvent)
export class TodoWasCreatedProjection
  implements IEventHandler<TodoWasCreatedEvent>
{
  async handle(event: TodoWasCreatedEvent) {
    console.log('Event Projection Handled', event);
    return null;
  }
}
