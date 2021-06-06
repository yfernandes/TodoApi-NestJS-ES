import { TodoCompletedEvent } from './todoCompleted.event';
import { TodoCreatedEvent } from './todoCreated.event';
import { TitleUpdatedEvent } from './titleUpdated.event';

export { TodoCreatedEvent, TitleUpdatedEvent, TodoCompletedEvent };

export const TodoEvents = {
  TodoWasCreated: (
    id: string,
    title: string,
    description: string,
    done: boolean,
  ) => new TodoCreatedEvent(id, title, description, done),
};
