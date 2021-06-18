import { Module } from '@nestjs/common';
import { EventSourcingModule } from '@tokilabs/nestjs-eventsourcing';
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
    EventSourcingModule.register({
      appPackageName: 'nes-todo-api',
      appRoot: path.resolve(__dirname),
    }),
  ],
})
export class BootstrapModule {}
