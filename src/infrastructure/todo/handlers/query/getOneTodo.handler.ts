import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Todo as TodoModel } from '.prisma/client';

import { PrismaService } from '../../../../shared/services/prisma.service';
import { GetOneTodoQuery } from 'src/domain/todo/queries';

@QueryHandler(GetOneTodoQuery)
export class GetOneTodoHandler implements IQueryHandler<GetOneTodoQuery> {
  constructor(private readonly prisma: PrismaService) {}
  async execute(command: GetOneTodoQuery): Promise<TodoModel> {
    return this.prisma.todo.findUnique({ where: { id: command.id } });
  }
}
