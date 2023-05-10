import {
  AggregateRoot,
  NanoGuidIdentity,
} from "@tokilabs/nestjs-event-sourcing/";

import {
  TitleUpdatedEvent,
  TodoCreatedEvent,
  TodoCompletedEvent,
  TodoUncompletedEvent,
  DescriptionUpdatedEvent,
} from "./events";

export class Todo extends AggregateRoot {
  private _done: string;
  public get done(): string {
    return this._done;
  }
  public set done(value: string) {
    this._done = value;
  }

  private _title: string;
  public set title(value: string) {
    this._title = value;
  }
  public get title(): string {
    return this._title;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  constructor(title: string, description: string, done: boolean) {
    super(new NanoGuidIdentity());
    this.applyChange(new TodoCreatedEvent(this.id, title, description, done));
  }

  complete(): void {
    this.applyChange(new TodoCompletedEvent(this.id));
  }

  uncomplete(): void {
    this.applyChange(new TodoUncompletedEvent(this.id));
  }

  updateTitle(title: string): void {
    this.applyChange(new TitleUpdatedEvent(this.id, title));
  }

  updateDescription(description: string): void {
    this.applyChange(new DescriptionUpdatedEvent(this.id, description));
  }
}
