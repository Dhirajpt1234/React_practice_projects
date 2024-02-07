import React, { useEffect, useMemo, useState } from "react";

export default function HookUseMemo() {
  const [number, setNumber] = useState(() => 0);
  const [dark, setDark] = useState(() => false);

  let doubleNumber = useMemo(() => {
    return slowFuntion(number);
  }, [number]);

  // themestyle will only change when there is actual change in the dark varible, and not due to the referential inquality
  const themeStyeles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      border: "black solid 2px",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyeles]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setDark((prevDark) => {
            return !prevDark;
          });
        }}
      >
        Change Theme
      </button>

      <div style={themeStyeles}>{doubleNumber}</div>
    </div>
  );
}

function slowFuntion(number) {
  for (let i = 0; i < 100000000; i++) {}

  return number * 2;
}
