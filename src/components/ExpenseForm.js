import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !category) {
      setError('Please enter both amount and category.');
      return;
    }

    onAddExpense({ amount: parseFloat(amount), category });
    setAmount('');
    setCategory('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="p-2 border rounded w-full"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
