import { useTodoController } from "./Todo.controller";
import { Todo } from './Todo'

export const App = () => {
  const controller = useTodoController({
    generate: () => crypto.randomUUID()
  });
  return <Todo controller={controller} />
};
