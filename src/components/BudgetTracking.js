import React, { useState } from "react";

const BudgetTracking = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [totalSpending, setTotalSpending] = useState(0);

  const addExpense = () => {
    const newExpense = { category, amount: parseFloat(amount) };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    setTotalSpending(updatedExpenses.reduce((sum, exp) => sum + exp.amount, 0));
    setCategory("");
    setAmount("");
  };

  const filteredExpenses = filterCategory
    ? expenses.filter((expense) => expense.category === filterCategory)
    : expenses;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Budget Tracking</h2>

      {/* Expense Input Fields */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-1/4"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded w-1/4"
        />
        <button onClick={addExpense} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Expense
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border p-2 rounded w-1/4"
        />
      </div>

      {/* Expenses List */}
      <ul className="mb-4">
        {filteredExpenses.map((expense, index) => (
          <li key={index} className="border-b py-2">
            {expense.category} - ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>

      {/* Total Spending Display */}
      <h3 className="text-lg font-bold">Total Spending: ${totalSpending.toFixed(2)}</h3>
    </div>
  );
};

export default BudgetTracking;

