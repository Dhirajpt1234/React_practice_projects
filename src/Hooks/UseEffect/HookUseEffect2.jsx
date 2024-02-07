import React, { useState, useEffect } from "react";

export default function HookUseEffect2() {
  console.log("hello");

  const [value, setValue] = useState(() => "None");
  const [count, setCount] = useState(() => 0);

  useEffect(() => {
    console.log("useEffect Fun");

    return () => {
      console.log("clean up fuction in useffect");
    };
  }, [value, count]);

  return (
    <>
      <h1>{value}</h1>

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
