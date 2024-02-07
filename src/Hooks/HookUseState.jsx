import React, { useState } from "react";

export default function HookUseState() {
  function countInitial() {
    console.log("Run function");
    return 0;
  }
  const [count, setCount] = useState(0);

  // always use function version.
  const [state, setState] = useState(() => {
    // countInitial();
  });
  //   const [state1, setState1] = useState(countInitial());

  const [state2, setState2] = useState(() => {
    return {
      count: 0,
      color: "Blue",
    };
  });

  //----------------------------------------------------------------------
  const increment = () => {
    // setCount((prevValue) => {
    //   return prevValue + 1;
    // });

    // setCount((prevValue) => {
    //   return prevValue + 1;
    // });

    //this both update will only one , caz react changes are asyncronus and they are putting the value from count state, which is updated later, so both values will set teh value to the same.
    //setCount(count + 1);
    //setCount(count + 1); // as I have written it at last, It can overrid prev 2.

    setState2((prevValue) => {
      return { ...prevValue, count: prevValue.count + 1 };
    });
  };

  const decrement = () => {
    // setCount((prevValue) => {
    //   return prevValue - 1;
    // });

    // setCount((prevValue) => {
    //   return prevValue - 1;
    // });

    setState2((prevValue) => {
      return { ...prevValue, count: prevValue.count - 1 };
    });
  };
  //----------------------------------------------------------------------

  return (
    <>
      <div>
        <div>
          {state2.count} {state2.color}
        </div>
        {/* <div>{count}</div> */}
        <button onClick={increment}>Incre</button>
        <button onClick={decrement}>Decr</button>
      </div>
    </>
  );
}
