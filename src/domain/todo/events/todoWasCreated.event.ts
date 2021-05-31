import { IEvent } from '@nestjs/cqrs';
export class TodoWasCreatedEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly done: boolean,
  ) {
    console.log('On Event');
  }
}
