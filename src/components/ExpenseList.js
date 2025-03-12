import React from 'react';

const ExpenseList = ({ expenses = [] }) => {
  if (expenses.length === 0) {
    return <p className="text-gray-500">No expenses recorded yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {expenses.map((expense, index) => (
        <li
          key={index}
          className="bg-white p-2 rounded shadow-md flex justify-between"
        >
          <span className="font-bold">{expense.category}</span>
          <span className="text-green-600">₹{expense.amount.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
