import { Task } from "../types/Task";

type TaskItemProps = {
    task: Task;
    handleDelete: (id:number) => void;
}
export default function TaskItem({task, handleDelete}: TaskItemProps) {
    return (    
        <li key={task.id}>
            {task.task} <button onClick={() => handleDelete(task.id)}>delete</button>
          </li>
    );
}