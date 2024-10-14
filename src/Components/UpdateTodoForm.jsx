import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoUpdated } from '../Redux/todoSlice';

function UpdateTodoForm() {
  const todoToUpdate = useSelector((state) => state.todo.todoUpdate); // Access todoUpdate from the state
  const [update, setUpdate] = useState(todoToUpdate.name || ''); // Set initial value based on todoToUpdate

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!update.trim()) { // Check if input is empty or just spaces
      alert("Please enter the todo");
      setUpdate(""); // Clear the input
      return;
    }

    dispatch(todoUpdated({
      id: todoToUpdate.id,
      name: update,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <input 
          value={update}
          onChange={(e) => setUpdate(e.target.value)} 
          type="text"
          placeholder="Update Todo"
          style={{
            padding: '10px 15px',
            width: '90%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '16px',
          }}
        />

        <button
          type="submit" 
          style={{
            backgroundColor: 'orange',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
            marginLeft: "10px",
            width: "100px",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateTodoForm;
