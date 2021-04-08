import React from 'react';
import AddTask from './AddTask';
import DeleteAll from './DeleteAll';

const TaskTable = () => {
  return ( 
    <div className='task-table'>
      <AddTask />
      <DeleteAll />
    </div>
   );
}
 
export default TaskTable;