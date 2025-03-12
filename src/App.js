import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import BudgetTracking from "./components/BudgetTracking";
import BudgetGoal from "./BudgetGoal";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";  // New Layout Import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Routes Wrapped in Layout */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>}
        />
        <Route
          path="/budget-tracking"
          element={<ProtectedRoute><Layout><BudgetTracking /></Layout></ProtectedRoute>}
        />
        <Route
          path="/budget-goal"
          element={<ProtectedRoute><Layout><BudgetGoal /></Layout></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
};

export default App;


