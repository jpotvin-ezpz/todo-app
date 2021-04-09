import React, {useState} from 'react';
import TaskTable from './TaskTable';

const CategoryFilter = ({tasks, setTasks, taskName, setTaskName, handleActiveChange, handleDeleteTask, handleDeleteAll}) => {
  const [category, changeCategory] = useState('all');
  return ( 
    <div className='todo-app--wrapper'>
    <div className='category-controller'>
      <button 
        onClick={() => changeCategory('all')}
        className={`btn-ctg ${category === 'all' ? 'active': ''}`}
        id='category-all' 
        type='button'
      >
      All
      </button>
      <button 
        onClick={() => changeCategory('active')}
        className={`btn-ctg ${category === 'active' ? 'active': ''}`}
        id='category-active' 
        type='button'
      >
      Active
      </button>
      <button 
        onClick={() => changeCategory('complete')}
        className={`btn-ctg ${category === 'complete' ? 'active': ''}`}
        id='category-complete' 
        type='button'
      >
      Completed
      </button> 
    </div>
      <TaskTable 
        category={category}
        tasks={tasks} 
        setTasks={setTasks}
        taskName={taskName}
        setTaskName={setTaskName}
        handleActiveChange={handleActiveChange}
        handleDeleteTask={handleDeleteTask}
        handleDeleteAll={handleDeleteAll}
      />
    </div>
   );
}
 
export default CategoryFilter;