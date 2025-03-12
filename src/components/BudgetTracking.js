import React, { useState, useEffect } from "react";
import { db, collection, addDoc, getDocs } from "../firebaseConfig";
 // Firestore Integration

const BudgetTracking = ({ mainBalance, setMainBalance }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense"); // "expense" or "income"
  const [records, setRecords] = useState([]);

  // Fetch Records from Firestore
  useEffect(() => {
    const fetchRecords = async () => {
      const recordsCollection = await getDocs(collection(db, "records"));
      const fetchedRecords = recordsCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecords(fetchedRecords);
    };
    fetchRecords();
  }, []);

  // Add Record Function
  const handleAddRecord = async () => {
    if (!amount || !category) return;

    const newRecord = {
      amount: Number(amount),
      category,
      type,
      date: new Date().toLocaleDateString(), // Adds current date
    };

    await addDoc(collection(db, "records"), newRecord);

    setRecords([...records, newRecord]);

    // Update Main Balance
    const updatedBalance =
      type === "income"
        ? mainBalance + Number(amount)
        : mainBalance - Number(amount);
    setMainBalance(updatedBalance);

    // Clear Inputs
    setAmount("");
    setCategory("");
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">📊 Budget Tracking</h1>

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

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-3 rounded-md shadow-md text-black"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-md"
          onClick={handleAddRecord}
        >
          ➕ Add
        </button>
      </div>

      {/* Main Account Balance Display */}
      <div className="bg-white text-black p-4 rounded-md shadow-md mb-4">
        <h2 className="text-2xl font-bold">💰 Main Account Balance:</h2>
        <p className="text-3xl">₹{mainBalance}</p>
      </div>

      {/* Records Display Section */}
      <div className="bg-white p-4 rounded-md shadow-md text-black">
        <h2 className="text-2xl font-bold mb-3">📋 Records</h2>

        {records.length === 0 ? (
          <p className="text-gray-500">No records yet.</p>
        ) : (
          <ul>
            {records.map((record, index) => (
              <li
                key={index}
                className={`p-3 rounded-md shadow-md mb-2 ${
                  record.type === "income" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <strong>
                  {record.type === "income" ? "Income" : "Expense"}: ₹
                  {record.amount}
                </strong>{" "}
                | Category: {record.category} | Date: {record.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BudgetTracking;
