import { PrismaService } from './../../../shared/services/prisma.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllTodosQuery } from '../definition/getAllTodos.query';
import { Todo as TodoModel } from '.prisma/client';

@QueryHandler(GetAllTodosQuery)
export class GetAllTodosHandler implements IQueryHandler<GetAllTodosQuery> {
  constructor(private readonly prisma: PrismaService) {}
  async execute(command: GetAllTodosQuery): Promise<TodoModel[]> {
    console.log('GetAllTodos Handler', command);
    return this.prisma.todo.findMany({});
  }
}
