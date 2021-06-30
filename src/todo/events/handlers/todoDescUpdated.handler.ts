import { EventHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { DescriptionUpdatedEvent } from './../definition/';

@EventHandler(DescriptionUpdatedEvent)
export class TodoDescriptionUpdatedHandler
  implements IEventHandler<DescriptionUpdatedEvent>
{
  handle(event: DescriptionUpdatedEvent) {
    console.log('Todo Description Updated Event', event);
    return null;
  }
}
