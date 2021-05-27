import { ValidationPipe } from './../shared/validation.pipe';
import { RemoveTodoCommand } from './commands/definition/removeTodo.command';
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
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateTodoDto, UpdateTodoDto } from './dtos';
import { Todo } from './entity/todo.entity';
import { CreateTodoCommand, UpdateTodoCommand } from './commands/definition';
import { GetAllTodosQuery, GetOneTodoQuery } from './query/definition';

@UsePipes(new ValidationPipe())
@Controller('todo')
export class TodoController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createTodo(@Body() dto: CreateTodoDto) {
    // console.log(dto);
    return this.commandBus.execute(new CreateTodoCommand(dto));
  }

  @Get()
  async findAllTodo(): Promise<Todo[]> {
    return this.queryBus.execute(new GetAllTodosQuery());
  }

  @Get(':id')
  async findOneTodo(@Param('id') id: string): Promise<Todo> {
    return this.queryBus.execute(new GetOneTodoQuery(id));
  }

  @Patch(':id')
  async updateTodo(@Body() dto: UpdateTodoDto) {
    console.log(dto);
    return this.commandBus.execute(new UpdateTodoCommand(dto));
  }

  @Delete(':id')
  async removeTodo(@Param('id') id: string) {
    return this.commandBus.execute(new RemoveTodoCommand(id));
  }
}
