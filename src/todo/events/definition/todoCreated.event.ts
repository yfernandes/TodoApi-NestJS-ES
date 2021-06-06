import { IEvent } from '@tokilabs/nestjs-eventsourcing';
export class TodoCreatedEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly done: boolean,
  ) {
    console.log('On Event');
  }
}
