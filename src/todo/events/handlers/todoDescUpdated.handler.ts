import { EventsHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { DescriptionUpdatedEvent } from './../definition/';

@EventsHandler(DescriptionUpdatedEvent)
export class TodoDescriptionUpdatedHandler
  implements IEventHandler<DescriptionUpdatedEvent>
{
  handle(event: DescriptionUpdatedEvent) {
    console.log('Todo Description Updated Event', event);
    return null;
  }
}
