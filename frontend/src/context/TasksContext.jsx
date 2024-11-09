import { createContext, useContext, useEffect, useState } from "react";
import { createTask, deleteTask, getAllTasks, updateCompletedTask } from "../api/tasks.api";

const TasksContext = createContext()

// eslint-disable-next-line react/prop-types
export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            setTasks(await getAllTasks())
        }
        loadTasks()
    }, [])

    const addTask = async (task) => {
        const newTask = await createTask(task)
        if (newTask !== undefined) {
            setTasks([...tasks, newTask])
            return true
        }
        return false
    }

    const updateCompleted = async (taskId, completed) => {
        const result = await updateCompletedTask(taskId, completed)
        if (result) {
            setTasks(tasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, completed: completed }
                }
                return task
            }))
            return true
        }
        return false
    }

    const removeTask = async (taskId) => {
        const result = await deleteTask(taskId)
        if (result) {
            setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId))
            return true
        }
        return false
    }

    return (
        <TasksContext.Provider value={{ tasks, addTask, updateCompleted, removeTask }}>
            {children}
        </TasksContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => useContext(TasksContext)