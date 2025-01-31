import { useState } from "react";

const GradeCalculator = () => {
  const [score, setScore] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [showGrade, setShowGrade] = useState(false); // For showing "Your Grade is:"

  // Grade Calculation
  const gradeCalculate = (marks) => {
    if (marks > 100 || marks < 0) {
      setResult("Please enter a number between 0 and 100.");
      return;
    }

    if (marks >= 80 && marks <= 100) setResult("A+");
    else if (marks >= 75) setResult("A");
    else if (marks >= 70) setResult("A-");
    else if (marks >= 65) setResult("B+");
    else if (marks >= 60) setResult("B");
    else if (marks >= 55) setResult("B-");
    else if (marks >= 50) setResult("C+");
    else if (marks >= 45) setResult("C");
    else if (marks >= 40) setResult("D");
    else setResult("F");
  };

  // Handle Calculate button
  const handleCalculate = () => {
    if (score === "") {
      setError("Score cannot be empty.");
      setResult("");
      setShowGrade(false); // Hide the grade when no score is entered
      return;
    }

    setError("");
    setShowGrade(true); // Show the grade label after calculation
    gradeCalculate(parseFloat(score));
  };

  // Handle Reset
  const handleReset = () => {
    setScore("");
    setResult("");
    setError("");
    setShowGrade(false); // Hide the grade section when reset
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold mb-4">Grade Calculator</h1>

        {/* Input Field */}
        <input
          type="number"
          placeholder="Enter your score"
          className={`border p-2 rounded w-full ${error ? "border-red-700" : ""}`}
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        {error && <p className="text-red-700 mt-2">{error}</p>}

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Calculate Grade
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="mt-4 bg-red-800 text-white py-2 px-4 rounded w-full"
        >
          Reset
        </button>

        {/* Display Grade Result */}
        {showGrade && (
          <div className="mt-4 flex items-center justify-center">
            <h2 className="text-xl font-bold text-black mr-2">Your Grade is:</h2>
            <div
              className={`text-xl font-bold ${
                result === "F" ? "text-red-700" : "text-green-700"
              }`}
            >
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradeCalculator;
