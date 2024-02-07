import React, { useState } from "react";
import "./Temp.css"; // Import your CSS file

function ProgressBar() {
  // State variables
  const [isDragging, setIsDragging] = useState(false);

  // Event handling methods
  function handleMouseDown(e) {
    e.preventDefault();
    setIsDragging(true);

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseUp() {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleDrag);

    // You can add the animation logic here
  }

  function handleDrag(e) {
    if (isDragging) {
      const progressBar = document.getElementById("progress-bar");
      const draggableHandle = document.getElementById("draggable-handle");
      const toastContainer = document.getElementById("toast");

      const { left, width } = progressBar.getBoundingClientRect();
      let newX = e.clientX - left;

      newX = Math.max(0, Math.min(newX, width));

      // Update UI
      draggableHandle.style.left = `${newX}px`;
      toastContainer.style.width = `${newX}px`;

      // Calculate progress level and update emoji
      const progressLevel = Math.floor((newX / width) * 5);
      updateEmoji(progressLevel);
    }
  }

  function updateEmoji(level) {
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
  }

  return (
    <div id="progress-bar-container">
      <div id="progress-bar">
        <div id="toast">
          <div id="draggable-handle" onMouseDown={handleMouseDown}>
            <span id="emoji">😐</span>
          </div>
        </div>
      </div>
      <div id="rating-container">
        <p id="rating-text">Rating is shown here...</p>
      </div>
    </div>
  );
}

export default ProgressBar;
