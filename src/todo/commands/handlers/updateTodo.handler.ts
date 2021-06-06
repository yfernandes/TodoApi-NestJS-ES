import { TodoEventStore } from '../../data/todo.eventStore';
import {
  CommandHandler,
  ICommandHandler,
} from '@tokilabs/nestjs-eventsourcing';

import { Todo } from '../../todo.entity';
import { UpdateTodoCommand } from 'src/todo/commands';

@CommandHandler(UpdateTodoCommand)
export class UpdateTodoHandler implements ICommandHandler<UpdateTodoCommand> {
  constructor(private readonly eventStore: TodoEventStore) {}
  async handle(command: UpdateTodoCommand) {
    // TODO: Create Update todo handler
    console.log('UpdateNewTodo Handler', command);

    const { title, description, done } = command.data;

    const todo: Todo = await this.eventStore.find(command.id);
    console.log(title, description, done, todo);

    /*     
    const userId = UserId.fromString(command.userId);
    const membersId = await this.getMembersIdByUserId.with(userId);
    const arr = Object.keys(membersId).map(function(id) {
      return membersId[id];
    });
    arr.map(async memberId => {
      const newMemberId = MemberId.fromString(memberId);
      const member = await this.members.find(newMemberId);
      const name = MemberName.fromString(command.name);

      if (!(member instanceof Member)) {
        throw MemberIdNotFoundError.withString(memberId);
      }

      member.rename(name);
      this.members.save(member);
    });
     */
    return 1;
  }
}
