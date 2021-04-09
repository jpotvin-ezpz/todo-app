import React from 'react';

const DeleteAll = ({handleDeleteAll}) => {
  return (
    <button 
      onClick={handleDeleteAll}
      type='button' 
      className='delete-all--btn'
    >
      <span className="material-icons">
        delete_outline
      </span>
      delete all
    </button>
);
}
 
export default DeleteAll;