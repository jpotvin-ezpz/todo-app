import React from 'react';
import TaskTable from './components/TaskTable';
import CategoryFilter from './components/CategoryFilter';

function App() {
  return (
    <div className='todoApp'>
      <CategoryFilter />
      <TaskTable />
    </div>
  )
}

export default App;