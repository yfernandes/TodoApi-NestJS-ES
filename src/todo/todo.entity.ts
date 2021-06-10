import { NanoGuidIdentity } from '@tokilabs/nestjs-eventsourcing/dist';
import { AggregateRoot } from '@tokilabs/nestjs-eventsourcing';

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
    super(new NanoGuidIdentity());
    // this.applyChange(new TodoCreatedEvent(this.id, title, description, done));
  }

  complete(): void {
    this.applyChange(new TodoCompletedEvent());
  }
}
