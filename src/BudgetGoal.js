import React, { useState } from "react";

const BudgetGoal = () => {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [date, setDate] = useState("");

  const addGoal = () => {
    if (!goalName || !goalAmount || !date) return;
    setGoals([...goals, { name: goalName, amount: Number(goalAmount), date }]);
    setGoalName("");
    setGoalAmount("");
    setDate("");
  };

  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">🎯 Budget Goals</h1>

      {/* Input Section */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter goal name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          className="w-full p-3 rounded-md shadow-md text-black"
        />
        <input
          type="number"
          placeholder="Enter goal amount"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
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

      {/* Goal List */}
      <div className="mt-6 bg-white text-black p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Goal List:</h2>
        {goals.length === 0 ? (
          <p className="text-gray-500">No goals added yet.</p>
        ) : (
          <ul className="space-y-2">
            {goals.map((goal, index) => (
              <li key={index} className="border-b pb-2">
                <strong>₹{goal.amount}</strong> - {goal.name} - {goal.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BudgetGoal;

