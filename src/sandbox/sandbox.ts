import { Controller, Get, Module } from '@nestjs/common';
import {
  // CommandBus,
  CqrsModule,
  // QueryBus,
  EventBus,
  IEvent,
  EventsHandler,
  IEventHandler,
} from '@nestjs/cqrs';

@Controller()
export class SandboxController {
  constructor(
    // private readonly commandBus: CommandBus,
    // private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ) {}

  @Get()
  sandboxGet(): any {
    return this.eventBus.publisher.publish(new sampleEvent());
    // return this.queryBus.execute(new GetAllTodosQuery());
  }
}

class sampleEvent implements IEvent {}

@EventsHandler(sampleEvent)
export class sampleEventHandler implements IEventHandler<sampleEvent> {
  handle(event: sampleEvent) {
    console.log('Event Handler: I fucking got here ', event);
  }
}

@Module({
  imports: [CqrsModule],
  controllers: [SandboxController],
  providers: [sampleEventHandler],
})
export class SandboxModule {}
