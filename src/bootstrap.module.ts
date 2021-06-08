import { Module } from '@nestjs/common';
import {
  EventSourcingModule /* EventBus */,
} from '@tokilabs/nestjs-eventsourcing';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(
      path.resolve(__dirname, 'config/**/!(*.d).config.{ts,js}'),
      {
        modifyConfigName: (name) => name.replace('.config', ''),
      },
    ),
    EventSourcingModule,
  ],
})
export class BootstrapModule {
  // constructor(private readonly eventBus: EventBus) {}
}
