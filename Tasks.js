
import { useState } from "react";
import data from './data'

export function Tasks() {
    const [listTasks, setListTasks] = useState([]);


    const addTask = (task) => {
      setListTasks([...listTasks, task]);
    };

    const removeTask = (removedTask) => {
      setListTasks(listTasks.filter((task) => task.id !== removedTask.id));
    };
    
  const toggleTask = (taskId) => {
    setListTasks(
      listTasks.map((task) =>
       task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

    return (
        <div>
          <h1>Tasks</h1>
          {data.task.map((task) => (
            <div key={task.id}><h2>{task.name}</h2>
              <button onClick={() => addTask(task)}>Add task</button>
            </div>
          ))}
          <h2>My Tasks</h2>
          <ul>
            {listTasks.map((task) => (
              <li key={task.id}>{task.name}, Completed:  {task.completed === true ?  'Yes':'No' } 
              <p><button onClick={() => removeTask(task)}>Remove Task from my list</button></p>
              <p><button onClick={() => toggleTask(task.id)}>Done</button></p>
              </li>
              
              
            ))}
          </ul>
        </div>
      ); 

}