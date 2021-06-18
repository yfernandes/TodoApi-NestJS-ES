import { EventsHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { TitleUpdatedEvent } from '../definition';

@EventsHandler(TitleUpdatedEvent)
export class TodoTitleUpdatedHandler
  implements IEventHandler<TitleUpdatedEvent>
{
  handle(event: TitleUpdatedEvent) {
    console.log('Todo Title Updated Event', event);
    return null;
  }
}
