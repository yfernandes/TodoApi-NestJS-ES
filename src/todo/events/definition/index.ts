import { IEvent } from '@tokilabs/nestjs-eventsourcing';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { TodoUncompletedEvent } from './todoUncompleted.event';
import { TodoCreatedEvent } from './todoCreated.event';
import { TodoCompletedEvent } from './todoCompleted.event';
import { TitleUpdatedEvent } from './titleUpdated.event';
import { DescriptionUpdatedEvent } from './descriptionUpdated.event';

export {
  TodoCreatedEvent,
  TitleUpdatedEvent,
  TodoCompletedEvent,
  TodoUncompletedEvent,
  DescriptionUpdatedEvent,
};

export const TodoEventsDefinition: Type<IEvent>[] = [
  TodoCreatedEvent,
  TitleUpdatedEvent,
  TodoCompletedEvent,
  TodoUncompletedEvent,
  DescriptionUpdatedEvent,
];
