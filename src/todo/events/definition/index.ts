import { TodoWasCreated } from './todoWasCreatedEvent';

export { TodoWasCreated };

export const TodoEvents = {
  TodoWasCreated: (
    id: string,
    title: string,
    description: string,
    done: boolean,
  ) => new TodoWasCreated(id, title, description, done),
};
