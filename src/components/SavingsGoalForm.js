import { useState } from "react";
import { db, auth } from "../firebaseConfig";  
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const SavingsGoalForm = () => {
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return alert("Please log in to set a goal");

    try {
      await addDoc(collection(db, "savings_goals"), {
        userId: user.uid,
        goalName,
        targetAmount: Number(targetAmount),
        currentAmount: 0,
        dueDate,
        createdAt: serverTimestamp(),
      });
      setGoalName("");
      setTargetAmount("");
      setDueDate("");
      alert("Goal Added Successfully!");
    } catch (error) {
      console.error("Error adding goal: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <input
        type="text"
        placeholder="Goal Name"
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default SavingsGoalForm;
