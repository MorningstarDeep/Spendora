import React, { useState } from "react";

const SavingsGoalForm = ({ addGoal }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !deadline) return;
    
    addGoal({ title, amount, deadline }); // ✅ Ensures deadline is passed
    setTitle("");
    setAmount("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Goal Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 rounded-md text-black"
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-3 rounded-md text-black"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="p-3 rounded-md text-black"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md"
      >
        ➕ Add Goal
      </button>
    </form>
  );
};

export default SavingsGoalForm;

