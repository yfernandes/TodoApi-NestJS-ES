import { AggregateRoot } from '@tokilabs/nestjs-eventsourcing';

import { nanoid } from 'nanoid';
import { TodoCompletedEvent } from './events/definition/todoCompleted.event';
import { TodoCreatedEvent } from './events/definition/todoCreated.event';

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
    this.applyChange(new TodoCreatedEvent(nanoid(), title, description, done));
  }

  complete(): void {
    this.applyChange(new TodoCompletedEvent());
  }
}
