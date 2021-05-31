import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../shared/services/prisma.service';

import { GetAllTodosQuery } from '../../../../domain/todo/queries/getAllTodos.query';
import { Todo as TodoModel } from '.prisma/client';

@QueryHandler(GetAllTodosQuery)
export class GetAllTodosHandler implements IQueryHandler<GetAllTodosQuery> {
  constructor(private readonly prisma: PrismaService) {}
  async execute(): Promise<TodoModel[]> {
    return this.prisma.todo.findMany({});
  }
}
