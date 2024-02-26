import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallBack = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />

      <button
        onClick={() => {
          setDark((prevDark) => {
            return !prevDark;
          });
        }}
      >
        {" "}
        Toggle{" "}
      </button>

      <List getItems={getItems} />
    </div>
  );
};

export default UseCallBack;
