import React, { useState } from "react";
import SavingsGoalForm from "./components/SavingsGoalForm";
import SavingsGoalDisplay from "./components/SavingsGoalDisplay";

const BudgetGoal = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">🎯 Budget Goal</h1>
      <SavingsGoalForm addGoal={addGoal} />
      <SavingsGoalDisplay goals={goals} />
    </div>
  );
};

export default BudgetGoal;



