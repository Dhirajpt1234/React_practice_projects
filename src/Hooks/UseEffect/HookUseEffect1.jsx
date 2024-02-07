import React, { useEffect, useState } from "react";

export default function HookUseEffect1() {
  console.log("hello");
  const [count, setCount] = useState(() => 0);
  const [value, setValue] = useState(() => "None");

  const handleInc = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };
  const handleDec = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };

  useEffect(() => {
    console.log("useEffect Fun");
  }, [value, count]);

  return (
    <>
      <h1>{count}</h1>
      <br />
      <h1>{value}</h1>

      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>

      <button
        onClick={() => {
          setValue("First");
        }}
      >
        First
      </button>
      <button
        onClick={() => {
          setValue("Second");
        }}
      >
        Second
      </button>
      <button
        onClick={() => {
          setValue("Third");
        }}
      >
        Third
      </button>
    </>
  );
}
