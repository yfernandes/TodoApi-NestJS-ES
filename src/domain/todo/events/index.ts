import { TodoWasCreatedEvent } from './todoWasCreated.event';

export { TodoWasCreatedEvent as TodoWasCreated };

export const TodoEvents = {
  TodoWasCreated: (
    id: string,
    title: string,
    description: string,
    done: boolean,
  ) => new TodoWasCreatedEvent(id, title, description, done),
};
