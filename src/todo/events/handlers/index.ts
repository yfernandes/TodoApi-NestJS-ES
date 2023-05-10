import { TodoUncompletedHandler } from "./todoUncompleted.handler";
import { TodoDescriptionUpdatedHandler } from "./todoDescUpdated.handler";
import { TodoCompletedHandler } from "./todoCompleted.handler";
import { TodoCreatedHandler } from "./todoCreated.handler";
import { TodoTitleUpdatedHandler } from "./todoTitleUpdated.handler";

export const TodoEventHandlers = [
  TodoCreatedHandler,
  TodoCompletedHandler,
  TodoUncompletedHandler,
  TodoTitleUpdatedHandler,
  TodoDescriptionUpdatedHandler,
];
