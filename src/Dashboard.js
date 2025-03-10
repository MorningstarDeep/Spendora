import React from "react";
import Sidebar from "./Sidebar";
import SavingsGoalForm from "./components/SavingsGoalForm";
import SavingsGoalsList from "./components/SavingsGoalsList";


const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome to Spendora!</p>

        {/* Add Savings Goal Form and Goals List Here */}
        <div className="mt-6 p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Savings Goals</h2>
          <SavingsGoalForm />
          <SavingsGoalsList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
