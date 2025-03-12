import React from 'react';

const ExpenseSummary = ({ total = 0 }) => {
  return (
    <div className="bg-green-500 text-white text-center p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Total Expenses</h2>
      <p className="text-3xl mt-2">₹{total.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseSummary;
