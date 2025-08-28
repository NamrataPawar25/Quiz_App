// src/components/Quiz.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data";
import QuestionCard from "./QuestionCard";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({}); // <-- store user answers
  const navigate = useNavigate();

  // Save selected answer
  const handleAnswer = (selected) => {
    setAnswers({
      ...answers,
      [current]: selected, // store answer for current question
    });
  };

  // Go to next question
  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  // Go to previous question
  const prevQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  // Submit quiz
  const submitQuiz = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    navigate("/result", { state: { score, total: questions.length } });
  };

  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-4">Quiz</h1>

      <QuestionCard
        question={questions[current].question}
        options={questions[current].options}
        selected={answers[current]} // <-- now works
        handleAnswer={handleAnswer}
      />

      <p>
        Question {current + 1} of {questions.length}
      </p>

      <div className="mt-3">
        <button
          onClick={prevQuestion}
          disabled={current === 0}
          className="btn btn-secondary me-2"
        >
          Previous
        </button>

        {current < questions.length - 1 ? (
          <button onClick={nextQuestion} className="btn btn-primary">
            Next
          </button>
        ) : (
          <button onClick={submitQuiz} className="btn btn-success">
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
