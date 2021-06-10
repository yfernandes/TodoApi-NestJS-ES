import { TodoEventStoreRepository } from './data/todo.eventStore';
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
import { PrismaService } from './../shared/services/prisma.service';

import { ValidationPipe } from '../shared/validation.pipe';

import { CreateTodoReq, UpdateTodoReq } from './req';
import { Todo } from './todo.entity';
import { NanoGuid } from '@tokilabs/lang';
import { NanoGuidIdentity } from '@tokilabs/nestjs-eventsourcing/';

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
    // todo.setBus(this.eventBus);

    todo.complete();

    return this.eventStore.save(todo);
  }

  @Get()
  async findAllTodo(): Promise<any[]> {
    return this.prisma.todo.findMany({});
  }

  @Get(':id')
  async findOneTodo(@Param('id') id: string): Promise<any> {
    const identity = new NanoGuidIdentity(id);

    return this.eventStore.getById(identity);
  }

  @Patch(':id')
  async updateTodo(@Body() req: UpdateTodoReq, @Param('id') id: string) {
    console.log('UpdateNewTodo Handler', req);

    const { title, description, done } = req;

    // const todo: Todo = await this.eventStore.find(command.id);
    console.log(title, description, done, id /* todo */);
  }

  @Delete(':id')
  async removeTodo(@Param('id') id: string) {
    console.log(id);
  }
}
