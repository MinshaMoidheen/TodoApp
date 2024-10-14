import React from "react";
import { Button, Card } from "react-bootstrap";
import UpdateTodoForm from "./UpdateTodoForm";
import AddToDoForm from "./AddToDoForm";
import SingleTodoCard from "./SingleTodoCard";
import { useDispatch, useSelector } from "react-redux";
import { todosCleared } from "../Redux/todoSlice";
import SearchTodo from "./SearchTodo";

function CardView() {
  const todos = useSelector((state) => state.todo.searchResults); // Display search results instead of all todos
  const toggleForm = useSelector((state) => state.todo.toggleForm);

  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <style>
        {`
        .custom-button {
            background: red;
            color: white;
            text-align: center;
            border: none;
            width: 150px;
            padding: 10px 20px;
            transition: background-color 0.3s ease;
        }
        .custom-button:hover {
            background-color: darkred;
            cursor: pointer;
        }
        `}
      </style>

      <Card style={{ width: "55%", height: "79%", backgroundColor: "#FFECB3" }}>
        <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ textAlign: "center", textDecoration: "underline", fontSize: "30px" }}>My Todo List</h1>
          </div>

          <div>{toggleForm ? <AddToDoForm /> : <UpdateTodoForm />}</div>

          <div><SearchTodo /></div> {/* Search component added */}

          <div
            style={{
              width: "90%",
              alignItems: "center",
              margin: "0% 5%",
              maxHeight: "270px",
              overflowY: "auto",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <ul
              style={{
                width: "100%",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {todos.length === 0 ? (
                <li style={{ textAlign: "center", fontSize: "25px", color: "black", fontWeight: "bolder" }}>
                  <div>
                    <p>Enter Your First Todo Item</p>
                  </div>
                </li>
              ) : (
                todos.map((todo) => (
                  <li key={todo.id} style={{ listStyle: "none", marginBottom: "10px" }}>
                    <SingleTodoCard id={todo.id} name={todo.name} />
                  </li>
                ))
              )}
            </ul>
          </div>

          <Button
            onClick={() => dispatch(todosCleared())}
            className="custom-button"
            style={{
              alignSelf: "center",
              marginTop: "auto",
            }}
          >
            Clear
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardView;
