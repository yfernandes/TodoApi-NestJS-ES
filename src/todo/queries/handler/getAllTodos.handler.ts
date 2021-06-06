import { IQueryHandler, QueryHandler } from '@tokilabs/nestjs-eventsourcing';
import { PrismaService } from '../../../shared/services/prisma.service';

import { GetAllTodosQuery } from '../getAllTodos.query';
import { Todo as TodoModel } from '.prisma/client';

@QueryHandler(GetAllTodosQuery)
export class GetAllTodosHandler implements IQueryHandler<GetAllTodosQuery> {
  constructor(private readonly prisma: PrismaService) {}
  async handle(): Promise<TodoModel[]> {
    return this.prisma.todo.findMany({});
  }
}
