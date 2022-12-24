export const Todo = ({ controller }) => (
  <>
    <h1>Minha aplicação</h1>
    <form onSubmit={controller.actions.onAddTask}>
      <input
        data-testid="app-field"
        onChange={controller.actions.onTaskChange}
        value={controller.state.task}
      />
      <button data-testid="app-button">Add</button>
    </form>
    <ul>
      {controller.state.tasks.map((t) => (
        <li key={t.id}>{t.name}</li>
      ))}
    </ul>
  </>
)
