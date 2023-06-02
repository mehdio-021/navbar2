import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="question container">
      <div className="question-title">
        <h2>{title}</h2>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? (
            <AiOutlineMinus color="#1f93ff" />
          ) : (
            <AiOutlinePlus color="#1f93ff" />
          )}
        </button>
      </div>
      <div className="question-answer">{showAnswer && <p>{answer}</p>}</div>
    </div>
  );
};

export default Question;
