import React from "react";

const SavingsGoalDisplay = ({ goals }) => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      {goals.map((goal, index) => (
        <div key={index} className="mb-4 p-3 bg-white rounded-md shadow-sm">
          <h3 className="text-xl font-bold text-blue-600">{goal.title}</h3>
          <p className="text-black">Target: ₹{goal.amount}</p>
          
          {/* ✅ Display Deadline Properly */}
          <p className="text-black">
            Deadline: {goal.deadline ? goal.deadline : "No deadline set"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SavingsGoalDisplay;
