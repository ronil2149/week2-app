"use client"
import { useState } from "react";
import {Task} from "@/app/types/Task";
import Header from "@/app/component/Header";



export default function Home() {
  const initialTasklist:Task[] = [ { id: 1, task: "Buy groceries", completed: false }, 
    { id: 2, task: "Do laundry", completed: true }, 
    { id: 3, task: "Complete assignment", completed: false }, 
    { id: 4, task: "Go for a walk", completed: true } ];
  const [tasklist, setTasklist] = useState<Task[]>(initialTasklist);

  const handleDelete = (id: number) => {
    const newTasklist = tasklist.filter((task) => task.id !== id);
    setTasklist(newTasklist);
    };
 
  return (
    <div>
      <Header title="Task List" total={tasklist.length}/>
      <ul>
        {tasklist.map((obj) => (
          <li key={obj.id}>
            {obj.task} <button onClick={() => handleDelete(obj.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}