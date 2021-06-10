import { IEvent } from '@tokilabs/nestjs-eventsourcing';
import { TodoCompletedEvent } from './todoCompleted.event';
import { TodoCreatedEvent } from './todoCreated.event';
import { TitleUpdatedEvent } from './titleUpdated.event';
import { Type } from '@nestjs/common/interfaces/type.interface';

export { TodoCreatedEvent, TitleUpdatedEvent, TodoCompletedEvent };

export const TodoEventsDefinition: Type<IEvent>[] = [
  TodoCreatedEvent,
  TitleUpdatedEvent,
  TodoCompletedEvent,
];
