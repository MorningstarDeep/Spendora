import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import BudgetTracking from "./components/BudgetTracking";
import BudgetGoal from "./BudgetGoal";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout"; // ✅ Ensures sidebar visibility

const App = () => {
  const [mainBalance, setMainBalance] = useState(0); // ✅ Tracks Main Balance

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes with Sidebar Layout */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard mainBalance={mainBalance} />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/budget-tracking"
          element={
            <ProtectedRoute>
              <Layout>
                <BudgetTracking
                  mainBalance={mainBalance}
                  setMainBalance={setMainBalance}
                />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/budget-goal"
          element={
            <ProtectedRoute>
              <Layout>
                <BudgetGoal
                  mainBalance={mainBalance}
                  setMainBalance={setMainBalance}
                />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
