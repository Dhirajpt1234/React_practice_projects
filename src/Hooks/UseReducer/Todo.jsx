import { ACTIONS } from "./TODOUseReducer";
import React from "react";

const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {" "}
        {todo.todoName}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
        }}
      >
        Delete
      </button>
      <br />
    </>
  );
};

export default Todo;
