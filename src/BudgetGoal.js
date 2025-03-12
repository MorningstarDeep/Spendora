import React from "react";
import SavingsGoalForm from "./components/SavingsGoalForm"; 
import SavingsGoalsList from "./components/SavingsGoalsList"; 

const BudgetGoal = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-3xl font-bold">Budget Goal</h1>
      <SavingsGoalForm />
      <SavingsGoalsList />
    </div>
  );
};

export default BudgetGoal;
