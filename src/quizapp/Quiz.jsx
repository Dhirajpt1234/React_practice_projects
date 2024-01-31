import React, { useState } from "react";
import questions from "./questions";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect) => {
    console.log("hello");
    if (isCorrect) {
      setScore(score + 1);
      alert("your ans is correct");
    }

    setIndex(index + 1);
  };

  return (
    <div className="app">
      {index === questions.length ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {index + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[index].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[index].answerOptions.map((val, key) => {
              return (
                <button
                  isTrue={val.isCorrect}
                  key={key}
                  name={key}
                  onClick={() => {
                    handleClick(val.isCorrect);
                  }}
                >
                  {val.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
