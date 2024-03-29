import { EventHandler, IEventHandler } from '@tokilabs/nestjs-eventsourcing';
import { TitleUpdatedEvent } from '../definition';

@EventHandler(TitleUpdatedEvent)
export class TodoTitleUpdatedHandler
  implements IEventHandler<TitleUpdatedEvent>
{
  handle(event: TitleUpdatedEvent) {
    console.log('Todo Title Updated Event', event);
    return null;
  }
}
