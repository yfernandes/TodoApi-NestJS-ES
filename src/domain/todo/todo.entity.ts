import { TodoWasCompleted } from './events/todoWasCompleted.event';
import { TodoWasCreatedEvent } from './events/todoWasCreated.event';
import { AggregateRoot } from '../shared/aggregate-root';
import { nanoid } from 'nanoid';

export class Todo extends AggregateRoot {
  private _id: string;
  public get id(): string {
    return this._id;
  }

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

  aggregateId(): string {
    return this._id;
  }

  // private onTodoWasCreated() {}

  complete(): void {
    this.apply(new TodoWasCompleted());
  }

  // uncomplete(): string {
  //   return 'some bullshit';
  // }

  // updateTitle(): string {
  //   return 'some bullshit';
  // }

  // updateDescription(): string {
  //   return 'some bullshit';
  // }
}
