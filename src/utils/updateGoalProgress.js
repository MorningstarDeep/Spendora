import { db } from "../firebase";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";

export const updateGoalProgress = async (userId, amount) => {
  const q = query(collection(db, "savings_goals"), where("userId", "==", userId));
  const snapshot = await getDocs(q);

  snapshot.forEach(async (docSnap) => {
    const goal = docSnap.data();
    if (goal.currentAmount < goal.targetAmount) {
      const newAmount = Math.min(goal.currentAmount + amount, goal.targetAmount);
      
      await updateDoc(doc(db, "savings_goals", docSnap.id), { currentAmount: newAmount });

      if (newAmount === goal.targetAmount) {
        alert(`🎉 Congrats! You reached your goal: ${goal.goalName}`);
      }
    }
  });
};
