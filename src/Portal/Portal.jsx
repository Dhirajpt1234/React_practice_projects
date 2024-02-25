import React, { useState } from "react";
import Modal from "./Modal";
import GoalCard1 from "../GoalCard/GoalScoreCard";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};
export default function Portal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Modal
        </button>

        <GoalCard1
          isOpen={isOpen}
          close={() => {
            setIsOpen(false);
          }}
        />
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}
