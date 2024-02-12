import React, { useState } from "react";
import "./GoalCard1.css";
import CircularSlider from "@fseehawer/react-circular-slider";

function GoalCard1() {
  return (
    <div class="card">
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
            labelColor="#1B1A55"
            progressColorFrom="#535C91"
            progressColorTo="#535C91"
            progressSize={6}
            trackColor="#eeeeee"
            trackSize={7}
            data={["1", "2", "3", "4", "5"]}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </div>

        <div className="task-heading">
          <p className="task-heading1">Task Heading</p>
          <p className="task-heading2">Task Heading desc</p>
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
    </div>
  );
}

export default GoalCard1;