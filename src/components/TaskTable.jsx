import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import DeleteAll from './DeleteAll';

const TaskTable = ({tasks, setTasks, taskName, setTaskName, handleActiveChange, handleDeleteTask, handleDeleteAll, category}) => {
  return ( 
    <div className='task-table'>
      <AddTask 
        tasks={tasks}
        setTasks={setTasks} 
        taskName={taskName} 
        setTaskName={setTaskName}
      />
      <TaskList 
        category={category}
        tasks={tasks}
        handleActiveChange={handleActiveChange}
        handleDeleteTask={handleDeleteTask}
      />
      {category === 'complete' && 
      <DeleteAll 
        handleDeleteAll={handleDeleteAll}
      />
      }
    </div>
   );
}
 
export default TaskTable;