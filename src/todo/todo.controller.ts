import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { NanoGuidIdentity } from '@tokilabs/nestjs-eventsourcing/';
import { PrismaService } from './../shared/services/prisma.service';
import { ValidationPipe } from '../shared/validation.pipe';

import { TodoEventStoreRepository } from './data/todo.eventStore';
import { CreateTodoReq, UpdateTodoReq } from './req';
import { Todo } from './todo.entity';

@UsePipes(new ValidationPipe())
@Controller('todo')
export class TodoController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventStore: TodoEventStoreRepository,
  ) {}

  @Post()
  async createTodo(@Body() req: CreateTodoReq) {
    const { title, description, done } = req;

    const todo = new Todo(title, description, done);

    return this.eventStore.save(todo);
  }

  @Get()
  async findAllTodo(): Promise<any[]> {
    return this.prisma.todo.findMany({});
  }

  @Get(':id')
  async findOneTodo(@Param('id') id: string): Promise<any> {
    // It should actually get from the read model(Prisma), getting the raw event for now
    return this.eventStore.getById(new NanoGuidIdentity(id));
  }

  @Patch(':id')
  async updateTodo(@Body() req: UpdateTodoReq, @Param('id') id: string) {
    const todo: Todo = await this.eventStore.getById(new NanoGuidIdentity(id));

    const { title, description, done } = req;

    if (title) {
      todo.updateTitle(title);
    }
    if (description) {
      todo.updateDescription(description);
    }
    if (done && !todo.done) {
      todo.complete();
    }

    if (!done && todo.done) {
      todo.complete();
    }
    return this.eventStore.save(todo);
  }

  @Delete(':id')
  async removeTodo(@Param('id') id: string) {
    throw new Error(`Route Not implemented. Received argument:${id}`);
  }
}
