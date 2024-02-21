import React, { useState } from "react";
import ReactDom from "react-dom";
import "./GoalScoreCard.css";
import CircularSlider from "@fseehawer/react-circular-slider";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

function GoalScoreCard(props) {
  if (!props.isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div class="card">
        <div className="remove">
          <button onClick={props.close}>X</button>
        </div>
        <div className="heading-container">
          <div className="image-container">
            <CircularSlider
              width={60}
              min={0}
              max={5}
              label="Rating"
              labelFontSize="10px"
              valueFontSize="20px"
              verticalOffset="0px"
              hideKnob={true}
              knobDraggable={true}
              labelColor="#1B1A55"
              progressColorFrom="#535C91"
              progressColorTo="#535C91"
              progressSize={6}
              trackColor="#eeeeee"
              trackSize={7}
              data={[1, 2, 3, 4, 5]}
              dataIndex={props.goalDetails.progress}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>

          <div className="task-heading">
            <p className="task-heading1">{props.goalDetails.taskHeading}</p>
            <p className="task-heading2">{props.goalDetails.taskDesc}</p>
          </div>
        </div>

        <div class="input-container">
          <textarea
            placeholder="Manager remarks..."
            class="remark-input"
          ></textarea>
        </div>

        <div class="input-container">
          <textarea
            placeholder="Employee remarks..."
            class="remark-input"
          ></textarea>
        </div>

        <div className="rating-container">
          <input type="range" min={0} max={5} className="rating" />
        </div>

        <button className="submit-button" type="submit">
          {" "}
          Submit
        </button>
      </div>{" "}
    </>,
    document.getElementById("portal")
  );
}

export default GoalScoreCard;
