import { AggregateRoot } from 'src/core/aggregate-root';
import { TodoWasCreated } from './../events/definition/';

export class Todo extends AggregateRoot {
  private _todoId: string;
  public get todoId(): string {
    return this._todoId;
  }
  public set todoId(value: string) {
    this._todoId = value;
  }

  private _done: string;
  public get done(): string {
    return this._done;
  }
  public set done(value: string) {
    this._done = value;
  }

  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  private _updatedAt: string;
  public get updatedAt(): string {
    return this._updatedAt;
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }

  constructor() {
    super();
  }

  aggregateId(): string {
    return this._todoId;
  }

  public static add(title: string, description: string, done: boolean) {
    const todo = new Todo();
    // Create ID
    const id = 'MyUniqueId';
    todo.apply(new TodoWasCreated(id, title, description, done));
    return todo;
  }
}
