import {
  ProjectionHandler,
  IEventHandler,
} from '@tokilabs/nestjs-eventsourcing';

import { TodoCreatedEvent } from '../events/definition';

@ProjectionHandler(TodoCreatedEvent)
export class TodoWasCreatedProjection
  implements IEventHandler<TodoCreatedEvent>
{
  async handle(event: TodoCreatedEvent) {
    console.log('Event Projection Handled', event);
    return null;
  }
}
