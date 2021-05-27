import { TodoEventStore } from './../../data/todo.eventStore';
import { PrismaService } from './../../../shared/services/prisma.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOneTodoQuery } from '../definition/';
import { Todo as TodoModel } from '.prisma/client';
import { Todo } from 'src/todo/entity/todo.entity';

@QueryHandler(GetOneTodoQuery)
export class GetOneTodoHandler implements IQueryHandler<GetOneTodoQuery> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventStore: TodoEventStore,
  ) {}
  async execute(command: GetOneTodoQuery): Promise<TodoModel> {
    // console.log('GetOneTodo Handler', command);

    const findEvent = await this.eventStore.get(command.id);
    console.log(findEvent instanceof Todo);

    return this.prisma.todo.findUnique({ where: { id: command.id } });
  }
}
