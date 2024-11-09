import { CompletedTasksList } from "../components/CompletedTaskList";
import { TaskAdd } from "../components/TaskAdd";
import { TasksList } from "../components/TasksList";
import '../styles/TodoPage.css'

export function TodoPage() {
  return (
    <main className="todo-page">
      <h1>To-do App</h1>
      <TaskAdd />
      <hr />
      <h2>Pendientes</h2>
      <TasksList />
      <hr />
      <h2>Completadas</h2>
      <CompletedTasksList />
    </main>
  )
}