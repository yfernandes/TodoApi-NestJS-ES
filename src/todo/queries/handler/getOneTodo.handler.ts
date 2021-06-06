import { IQueryHandler, QueryHandler } from '@tokilabs/nestjs-eventsourcing';
import { Todo as TodoModel } from '.prisma/client';

import { PrismaService } from '../../../shared/services/prisma.service';
import { GetOneTodoQuery } from '..';

@QueryHandler(GetOneTodoQuery)
export class GetOneTodoHandler implements IQueryHandler<GetOneTodoQuery> {
  constructor(private readonly prisma: PrismaService) {}
  async handle(command: GetOneTodoQuery): Promise<TodoModel> {
    return this.prisma.todo.findUnique({ where: { id: command.id } });
  }
}
