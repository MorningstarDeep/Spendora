import React from "react";
import SavingsGoalForm from "./components/SavingsGoalForm"; // Import the form
import SavingsGoalsList from "./components/SavingsGoalsList"; // Import the list

const BudgetGoal = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Budget Goal</h1>
      
      {/* Form to Add Savings Goal */}
      <SavingsGoalForm />  

      {/* List of Saved Goals */}
      <SavingsGoalsList />  
    </div>
  );
};

export default BudgetGoal;

