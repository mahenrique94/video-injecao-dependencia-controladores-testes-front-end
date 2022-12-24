import { useState } from "react";

export const useTodoController = (idService: IdService) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (task.trim().length > 0) {
      setTasks((oldTasks) => [
        ...oldTasks,
        { id: idService.generate(), name: task },
      ]);
      setTask("");
    }
  };

  const handleFieldChange = (event) => {
    setTask(event.target.value);
  };

  return {
    actions: {
      onAddTask: handleFormSubmit,
      onTaskChange: handleFieldChange,
    },
    state: {
      task,
      tasks,
    },
  }
}