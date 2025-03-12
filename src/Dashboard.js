import React from "react";

const Dashboard = ({ mainBalance }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-green-100 p-4 rounded-md shadow-md text-green-800">
        <h2 className="text-2xl">💰 Main Account Balance</h2>
        <p className="text-4xl font-bold">₹{mainBalance}</p>
      </div>
    </div>
  );
};

export default Dashboard;
