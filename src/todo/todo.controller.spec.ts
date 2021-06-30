import { CreateTodoReq } from './req/createTodo.req';
import { Test } from '@nestjs/testing';
import { EventSourcingModule } from '@tokilabs/nestjs-eventsourcing';
import * as path from 'path';

import { TodoController } from './todo.controller';
import { PrismaService } from '../shared/services/prisma.service';
import { TodoEventStoreRepository } from './data/todo.eventStore';

describe('TodoController', () => {
  let todoController: TodoController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        EventSourcingModule.register({
          appPackageName: 'nes-todo-api',
          appRoot: path.resolve(__dirname),
          transport: 'Mock',
          eventStore: 'Mock',
        }),
      ],
      controllers: [TodoController],
      providers: [TodoEventStoreRepository, PrismaService],
    }).compile();

    todoController = moduleRef.get<TodoController>(TodoController);
  });

  describe('createTodo', () => {
    it('When given a title it should return a new todo', async () => {
      const req: CreateTodoReq = { title: 'MyTitle' };
      const todo = await todoController.createTodo(req);
      expect(todo).toHaveLength(1);
    });
  });

  // describe('findAllTodo', async () => {
  //   it('should ', async () => {
  //     expect(1 + 1).toBe(2);
  //   });
  // });

  // describe('findOneTodo', () => {
  //   it('should ', async () => {
  //     expect(1 + 1).toBe(2);
  //   });
  // });

  // describe('updateTodo', () => {
  //   it('should ', async () => {
  //     expect(1 + 1).toBe(2);
  //   });
  // });

  // describe('removeTodo', () => {
  //   it('should ', async () => {
  //     expect(1 + 1).toBe(2);
  //   });
  // });
});
