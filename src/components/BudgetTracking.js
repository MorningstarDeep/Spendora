import React, { useState } from "react";

const BudgetTracking = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const addExpense = () => {
    if (!amount || !category || !date) return;
    setExpenses([...expenses, { amount: Number(amount), category, date }]);
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-green-400 to-green-300 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">💰 Budget Tracking</h1>

      {/* Input Section */}
      <div className="flex gap-4 mb-6">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-md shadow-md text-black"
        />
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded-md shadow-md text-black"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 rounded-md shadow-md text-black"
        />
        <button
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-md"
          onClick={addExpense}
        >
          ➕ Add Expense
        </button>
      </div>

      {/* Total Expenses Display */}
      <div className="bg-white text-black p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold">Total Expenses:</h2>
        <p className="text-3xl">₹{expenses.reduce((sum, exp) => sum + exp.amount, 0)}</p>
      </div>
    </div>
  );
};

export default BudgetTracking;


