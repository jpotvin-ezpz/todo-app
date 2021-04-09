import React, {useState} from 'react';
import { uuid } from 'uuidv4';
import CategoryFilter from './components/CategoryFilter';
import './styles/index.css'

function App() {
  const [taskName, setTaskName] = useState('')
  const [tasks, setTasks] = useState([
    {
    "name": "My first task",
    "active": true,
    'checked': false,
    id: uuid(),
    },
  ]);
  const handleActiveChange = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = {
          ...task,
          active: !task.active,
          checked: !task.checked,
        };
        return updatedTask;
      }
      return task;
    })
    setTasks(newTasks);
  }

  const handleDeleteTask = (e) => {
    const id = e.currentTarget.parentElement.id
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleDeleteAll = () => {
    setTasks(tasks.filter(task => task.active))
  }
  
  return (
    <div className='todo-app'>
      <h1 className='todo-title'>#todo</h1>
      <CategoryFilter 
        tasks={tasks} 
        setTasks={setTasks}
        taskName={taskName}
        setTaskName={setTaskName}
        handleActiveChange={handleActiveChange}
        handleDeleteTask={handleDeleteTask}
        handleDeleteAll={handleDeleteAll}
      />
    </div>
  )
}

export default App;