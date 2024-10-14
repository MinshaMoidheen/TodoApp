import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoAdded } from '../Redux/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

function AddToDoForm() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Please enter a todo");
      return; 
    } else {
      dispatch(todoAdded({
        id: nanoid(),
        name: input,
      }));
      setInput(''); 
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <input
          type="text"
          placeholder='Add Todos'
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
            marginLeft: "10px", width: "100px"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddToDoForm;
