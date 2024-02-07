import React, { useState } from "react";
import "./Temp.css"; // Import your CSS file

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [progressLevel, setProgressLevel] = useState(-1);
  const [toastWidth, setToastWidth] = useState(0);
  const [emoji, setEmoji] = useState("😐");

  const handleMouseDown = (e) => {
    console.log("handle mouse down is running...");
    e.preventDefault();
    setIsDragging(true);
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleDrag);

    // Add the burst-emoji class to trigger the burst animation
    document.getElementById("emoji").classList.add("burst-emoji");

    // Reset the burst animation after a delay
    setTimeout(() => {
      document.getElementById("emoji").classList.remove("burst-emoji");
    }, 500);
  };

  const handleDrag = (e) => {
    if (isDragging) {
      const progressBar = document.getElementById("progress-bar");

      const { left, width } = progressBar.getBoundingClientRect();
      let newX = e.clientX - left;

      newX = Math.max(0, Math.min(newX, width));

      setToastWidth(newX);
      console.log(toastWidth);

      const newProgressLevel = Math.floor((newX / width) * 5);
      setProgressLevel(newProgressLevel);
    }
  };

  const updateEmoji = (level) => {
    const emojiSpan = document.getElementById("emoji");
    switch (level) {
      case 0:
        emojiSpan.textContent = "😡";
        break;
      case 1:
        emojiSpan.textContent = "😟";
        break;
      case 2:
        emojiSpan.textContent = "😊";
        break;
      case 3:
        emojiSpan.textContent = "😀";
        break;
      case 4:
        emojiSpan.textContent = "😃";
        break;
      case 5:
        emojiSpan.textContent = "😁";
        break;
      default:
        emojiSpan.textContent = "😐";
    }
  };

  return (
    <div className="App">
      <div id="progress-bar-container">
        <div id="progress-bar">
          <div
            id="toast"
            style={{
              width: `${toastWidth}px`,
            }}
          >
            <div
              id="draggable-handle"
              style={{
                left: `${toastWidth}px`,
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              <span id="emoji"> {emoji}</span>
            </div>
          </div>
        </div>
        <div id="rating-container">
          <p id="rating-text">
            {progressLevel === -1
              ? `rating will be shown here...`
              : progressLevel}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
