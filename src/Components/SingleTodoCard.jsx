import { useState } from "react";
import { BsCheckSquare, BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { todoDeleted, toggleInputForm } from "../Redux/todoSlice";

const SingleTodoCard = (props) => {
  const [done, setDone] = useState(false);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 15px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px auto",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "20px",
            margin: 0,
            textDecoration: done ? "line-through" : "none",
            color: done ? "#aaa" : "#000",
            fontWeight: "600",
          }}
        >
          {props.name}
        </h1>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <BsCheckSquare
          title="Mark as Done"
          onClick={() => setDone(!done)}
          style={{ cursor: "pointer", color: "green" }}
          size={20}
        />
        <FaEdit
          onClick={() => dispatch(toggleInputForm({ id: props.id, name: props.name }))}
          title="Edit Todo"
          style={{ cursor: "pointer", color: "orange" }}
          size={20}
        />
        <BsTrashFill
          onClick={() => dispatch(todoDeleted(props.id))}
          title="Delete Todo"
          style={{ cursor: "pointer", color: "red" }}
          size={20}
        />
      </div>
    </div>
  );
};

export default SingleTodoCard;
