import { useTasks } from "../context/TasksContext"
import '../styles/TaskCard.css'

// eslint-disable-next-line react/prop-types
export function TaskCard({ id, title, completed }) {
    const { removeTask, updateCompleted } = useTasks()

    const onDelete = async () => {
        const result = removeTask(id)
        // if (result) alert("Task deleted successfully")
        // else alert("Task not deleted")
    }

    const toggleCompleted = async () => {
        const result = await updateCompleted(id, !completed)
        // if (result && completed) alert("Task marked as Incompleted successfully")
        // if (result && !completed) alert("Task marked as Completed successfully")
    }

    return (
        <section className="task-card">
            <input id={`Task-${id}`} type="checkbox" onChange={toggleCompleted} checked={completed} />
            <label className={completed ? 'task-checked' : ''}>{title}</label>
            <button className="delete-button" onClick={onDelete}>
                <TrashIcon />
            </button>
        </section>
    )
}

const TrashIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={24}
    height={24}
    strokeWidth={2}
    {...props}
  >
    <path d="M4 7l16 0" />
    <path d="M10 11l0 6" />
    <path d="M14 11l0 6" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
)
