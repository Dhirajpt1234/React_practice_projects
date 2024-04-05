import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  ADD_PAYLOAD: "addPayload",
};

const reducer = (count, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return count + 1;
    case ACTIONS.DECREMENT:
      return count - 1;
    case ACTIONS.ADD_PAYLOAD:
      return count + action.Payload.amount;
    case ACTIONS.RESET:
      return 0;
    default:
      return count;
  }
};

const UseReducer1 = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INCREMENT });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DECREMENT });
        }}
      >
        {" "}
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_PAYLOAD, Payload: { amount: 5 } });
        }}
      >
        Add 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: ACTIONS.RESET });
        }}
      >
        Reset
      </button>
    </>
  );
};

export default UseReducer1;
