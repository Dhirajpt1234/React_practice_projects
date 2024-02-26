import React, { useState } from "react";
import List from "./List";

const UseDefferedValue = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <List input={value} />
    </div>
  );
};

export default UseDefferedValue;
