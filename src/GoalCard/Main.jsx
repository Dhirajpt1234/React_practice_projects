import React, { useState } from "react";
import GoalCard1 from "./GoalScoreCard";
import data from "./constants";
import "./Main.css";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

export default function Main() {
<<<<<<< HEAD
  return <></>;
=======
  const [isOpen, setIsOpen] = useState(0);
  const [modelIndex, setModelIndex] = useState(0);

  const handleClick = (e) => {
    setIsOpen(true);
    const index = e.target.name;
    setModelIndex(index);
  };

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button
          name="1"
          style={{
            margin: "20px",
          }}
          onClick={handleClick}
        >
          {" "}
          Button no 1
        </button>
        <button
          name="2"
          style={{
            margin: "20px",
          }}
          onClick={handleClick}
        >
          {" "}
          Button no 2
        </button>

        <button
          name="3"
          style={{
            margin: "20px",
          }}
          onClick={handleClick}
        >
          {" "}
          Button no 3
        </button>

        <button
          name="4"
          style={{
            margin: "20px",
          }}
          onClick={handleClick}
        >
          {" "}
          Button no 4
        </button>

        <button
          name="5"
          style={{
            margin: "20px",
          }}
          onClick={handleClick}
        >
          {" "}
          Button no 5
        </button>

        <button
          name="6"
          style={{
            margin: "20px",
          }}
          onClick={handleClick}
        >
          {" "}
          Button no 6
        </button>

        <GoalCard1
          isOpen={isOpen}
          close={() => {
            setIsOpen(false);
          }}
          goalDetails={data[modelIndex]}
        />
      </div>
    </>
  );
>>>>>>> 2b01892ceb05358b531e12b5b59f295fbe5d485d
}
