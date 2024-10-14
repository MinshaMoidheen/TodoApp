import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTodo } from '../Redux/todoSlice';

function SearchTodo() {
  const [searchKey, setSearch] = useState('');
  const dispatch = useDispatch();

  // Handle search input changes and dispatch the searchTodo action
  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchTodo(e.target.value)); // Dispatch the search action with the searchKey
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div style={{ marginLeft: "60%", marginTop: "15px" }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <input
            value={searchKey}
            onChange={handleSearch} // Call handleSearch on input change
            type="text"
            placeholder="Search Todo"
            style={{
              padding: '10px 15px',
              width: '60%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              outline: 'none',
              fontSize: '16px',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s ease',
              marginLeft: '10px',
              width: '100px',
            }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchTodo;
