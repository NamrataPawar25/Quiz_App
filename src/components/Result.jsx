// src/components/Result.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get score + total from Quiz.js
  const { score, total, name } = location.state || { score: 0, total: 0, name: "Guest" };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Quiz Completed 🎉</h1>
      <h1>Great Job, {name}! 🎉</h1>
      <h2>
        Your Score: {score} / {total}
      </h2>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/quiz")}
          style={{
            margin: "10px",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            background: "#4CAF50",
            color: "white",
            border: "none",
          }}
        >
          Retake Quiz
        </button>

        <button
          onClick={() => navigate("/")}
          style={{
            margin: "10px",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            background: "#2196F3",
            color: "white",
            border: "none",
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Result;
