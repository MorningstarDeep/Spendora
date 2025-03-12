import React, { useState } from "react";

const BudgetGoal = () => {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [date, setDate] = useState("");

  const addGoal = () => {
    if (!goalName || !targetAmount || !date) return;
    setGoals([...goals, { goalName, targetAmount, date }]);
    setGoalName("");
    setTargetAmount("");
    setDate("");
  };

  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">🎯 Budget Goal</h1>

      {/* Input Section */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Goal Name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          className="w-full p-3 rounded-md shadow-md text-black"
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          className="w-full p-3 rounded-md shadow-md text-black"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 rounded-md shadow-md text-black"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md"
          onClick={addGoal}
        >
          ➕ Add Goal
        </button>
      </div>

      {/* Goals Display */}
      <div className="bg-white text-black p-4 rounded-md shadow-md">
        {goals.length > 0 ? (
          goals.map((goal, index) => (
            <div key={index} className="border-b p-2">
              <strong>{goal.goalName}</strong> - ₹{goal.targetAmount} (Due: {goal.date})
            </div>
          ))
        ) : (
          <p>No goals added yet.</p>
        )}
      </div>
    </div>
  );
};

export default BudgetGoal;


