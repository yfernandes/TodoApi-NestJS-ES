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

@UsePipes(new ValidationPipe())
@Controller('todo')
export class TodoController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async createTodo(@Body() req: CreateTodoReq) {
    const { title, description, done } = req;

    const todo = new Todo(title, description, done);
    // todo.setBus(this.eventBus);

    todo.complete();
    return null;
  }

  @Get()
  async findAllTodo(): Promise<any[]> {
    const x = this.prisma.todo.findMany({});
    return x;
  }

  @Get(':id')
  async findOneTodo(@Param('id') id: string): Promise<any> {
    const x = await this.prisma.todo.findUnique({ where: { id } });
    return x;
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
