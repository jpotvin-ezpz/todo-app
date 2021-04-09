import React from 'react';
import {uuid} from 'uuidv4';

const AddTask = ({tasks, setTasks, taskName, setTaskName }) => {
  const handleSubmitTask = (e) => {
    e.preventDefault();
    setTasks([
      {
        name:taskName,
        active:true,
        checked: false,
        id: uuid()
      },
      ...tasks
    ])
    setTaskName('')
  }
  return (
  <form className='add-task' onSubmit={(e) => handleSubmitTask(e)}>
    <input
      onChange={(e) => setTaskName(e.target.value)}
      value={taskName}
      className='add-details'
      placeholder="add details"
      type='text'
      id='addText'
      required
    />
    <input 
      type='submit' 
      value='Add' 
      className='add-submit' />
  </form>  
  );
}
 
export default AddTask;