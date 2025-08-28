// src/components/QuestionCard.js
import React from "react";

const QuestionCard = ({ question, options, selected, handleAnswer }) => {
  return (
    <div className="card shadow p-4 mb-3">
      <h4 className="mb-3">{question}</h4>

      <div className="list-group">
        {options.map((option, index) => (
          <label
            key={index}
            className={`list-group-item d-flex align-items-center ${
              selected === option ? "active" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={selected === option}
              onChange={() => handleAnswer(option)}
              className="form-check-input me-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
