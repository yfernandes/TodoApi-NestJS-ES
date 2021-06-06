import { AggregateRoot } from '@tokilabs/nestjs-eventsourcing';

import { TodoWasCompleted } from './events/todoWasCompleted.event';
import { TodoWasCreatedEvent } from './events/todoWasCreated.event';
import { nanoid } from 'nanoid';

export class Todo extends AggregateRoot {
  private _done: string;
  public get done(): string {
    return this._done;
  }

  private _title: string;
  public get title(): string {
    return this._title;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }

  constructor(title: string, description: string, done: boolean) {
    super();
    this.apply(new TodoWasCreatedEvent(nanoid(), title, description, done));
  }

  complete(): void {
    this.apply(new TodoWasCompleted());
  }
}
