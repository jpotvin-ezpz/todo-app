import React from 'react';

const AddTask = () => {
  return (
  <form>
    <input
      placeholder="Add task"
      type='text'
      required
    />
    <submit value="Add"/>
  </form>  );
}
 
export default AddTask;