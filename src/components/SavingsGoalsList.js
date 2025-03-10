import { useEffect, useState } from "react";
import { db, auth } from "../firebaseConfig";  
import { collection, query, where, onSnapshot } from "firebase/firestore";

const SavingsGoalsList = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(collection(db, "savings_goals"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const goalsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGoals(goalsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>My Savings Goals</h2>
      {goals.map((goal) => (
        <div key={goal.id} className="goal-card">
          <h3>{goal.goalName}</h3>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.currentAmount}</p>
          <p>Due Date: {goal.dueDate}</p>
          <progress value={goal.currentAmount} max={goal.targetAmount}></progress>
        </div>
      ))}
    </div>
  );
};

export default SavingsGoalsList;
