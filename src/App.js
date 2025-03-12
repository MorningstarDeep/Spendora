import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard"; 
import ProtectedRoute from "./ProtectedRoute"; 
import BudgetTracking from "./components/BudgetTracking";  // New Import
import BudgetGoal from "./BudgetGoal"; // Correct import path







const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/budget-tracking" element={<ProtectedRoute><BudgetTracking /></ProtectedRoute>} />
        <Route path="/budget-goal" element={<ProtectedRoute><BudgetGoal /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;


