import { useTasks } from "../context/TasksContext"
import { TaskCard } from "./TaskCard"
import '../styles/TasksList.css'

export function TasksList() {
    const { tasks } = useTasks()

    return (
        <ul className="tasks-list">
            {tasks.filter(task => task.completed === false).map((task, index) => (
                <li key={index}>
                    <TaskCard {...task} />
                </li>
            ))}
        </ul>
    )
}