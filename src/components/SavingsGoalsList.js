import React from "react";

const SavingsGoalsList = ({ goals = [] }) => {
  return (
    <div className="flex flex-col gap-4">
      {goals.length === 0 ? (
        <p className="text-center text-gray-500">No goals added yet.</p>
      ) : (
        goals.map((goal, index) => (
          <div
            key={index}
            className="bg-blue-100 text-black p-4 rounded-md shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-bold">{goal.goal}</h3>
              <p className="text-sm">Target: ₹{goal.amount}</p>
              <p className="text-sm">Deadline: {goal.date}</p>
            </div>

            {/* Progress Bar */}
            <div className="w-24 h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full"
                style={{ width: `${Math.min((goal.amount / 1000) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SavingsGoalsList;

