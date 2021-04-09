import React from 'react';

const TaskList = ({tasks, handleActiveChange, handleDeleteTask, category}) => {
  let filteredTasks = [];
  switch(category) {
    case 'active':
    filteredTasks = tasks.filter(task => task.active);
    break;
    case 'complete':
    filteredTasks = tasks.filter(task => !task.active);
    break;
    default:
    filteredTasks = tasks;
  }
  const taskItem = filteredTasks.map((task, index) => {
    return (
      <li className='task' key={index} id={task.id}>
      <div className='check-name--wrapper'>
        <input
          checked={task.checked}
          onChange={() => handleActiveChange(task.id)}
          type='checkbox'
          className='todo-checkbox'
        />
        <p className={`task-name ${!task.active ? "complete": ''}`}>{task.name}</p>
      </div>
      {!task.active && category === 'complete' &&
        <span 
          onClick={(e) => handleDeleteTask(e)}
          className='material-icons'
        >
          delete_outline
        </span>} 
    </li>
  )})

  return (
    <ul className='task-list'>
    {taskItem}
    </ul>
    );
}
 
export default TaskList;