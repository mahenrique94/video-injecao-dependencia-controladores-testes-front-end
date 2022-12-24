import { screen, render, fireEvent } from "@testing-library/react";

import { Todo } from "./Todo";
import { useTodoController } from "./Todo.controller";

describe("Tests for Todo component", () => {
  it("Should add a new task on the list when fill the field and submit the form", () => {
    const WrappedComponent = () => {
      const controller = useTodoController({
        generate: () => 1
      })
      return <Todo controller={controller} />
    }

    render(<WrappedComponent />);

    fireEvent.change(screen.getByTestId("app-field"), {
      target: { value: "First" },
    });
    fireEvent.click(screen.getByTestId("app-button"));

    expect(screen.getByText('First')).toBeDefined()
  });
});
