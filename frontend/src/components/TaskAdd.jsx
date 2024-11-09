import { useForm } from "react-hook-form"
import { useTasks } from "../context/TasksContext"
import '../styles/TaskAdd.css'

export function TaskAdd() {
    const { addTask } = useTasks()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        const result = await addTask(data)
        if (result) reset()
    })

    return (
        <section>
            <form onSubmit={onSubmit} className="task-add">
                <div className="form-group">
                    <input type="text" placeholder="Agregar Nueva Tarea" {...register("title", { required: true })} />
                    {/* {errors.title && <span className="error">* El campo es requerido</span>} */}
                </div>
                <button type="submit">Agregar</button>
            </form>
        </section>
    )
}