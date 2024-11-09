import axios from "axios"

const taskApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/tasks/",
})

export const getAllTasks = async () => {
  const { data } = await taskApi.get("/")

  return data.map((task) => {
    return {
      id: task.id,
      title: task.title,
      completed: task.completed,
    }
  })
}

export const createTask = async (task) => {
  const newTask = {
    title: task.title,
    completed: false
  }

  const { status, data } = await taskApi.post("/", newTask)
  if (status === 201) return data
  return undefined
}

export const updateCompletedTask = async (id, completed) => {
  const { status } = await taskApi.patch(`/${id}/`, { completed })
  if (status === 200) return true
  return false
}

export const deleteTask = async (id) => {
  const { status } = await taskApi.delete(`/${id}/`)
  if (status === 204) return true
  return false
}