// src/components/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const startQuiz = () => {
    if (name.trim() === "") {
      alert("Please enter your name before starting the quiz!");
      return;
    }
    navigate("/quiz", { state: { name } }); // pass name to quiz
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to the Quiz App 🎓</h1>

      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={startQuiz} className="btn btn-primary w-100">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
