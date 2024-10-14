import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  toggleForm: true,
  todoUpdate: {},
  searchResults: [], // To store the filtered todos
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
      state.searchResults = [...state.todos]; // Update searchResults when a new todo is added
    },
    todosCleared: (state) => {
      state.todos = [];
      state.searchResults = []; // Clear search results when all todos are cleared
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.searchResults = state.todos; // Update search results after deletion
    },
    toggleInputForm: (state, action) => {
      state.toggleForm = !state.toggleForm;
      state.todoUpdate = { ...state.todoUpdate, ...action.payload };
    },
    todoUpdated: (state, action) => {
      const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id);
      if (todoToUpdate) {
        todoToUpdate.name = action.payload.name;
      }
      state.toggleForm = !state.toggleForm;
      state.searchResults = state.todos; // Update search results after updating a todo
    },
    searchTodo: (state, action) => {
      const searchKey = action.payload.toLowerCase();
      if (searchKey) {
        state.searchResults = state.todos.filter((todo) =>
          todo.name.toLowerCase().includes(searchKey)
        );
      } else {
        state.searchResults = state.todos; // Reset to all todos when searchKey is empty
      }
    },
  },
});

export const { todoAdded, todosCleared, todoDeleted, toggleInputForm, todoUpdated, searchTodo } = todoSlice.actions;
export default todoSlice.reducer;
