import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaHome, FaChartBar, FaCog, FaBullseye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <motion.div 
      animate={{ width: isOpen ? "250px" : "60px" }}
      className="h-screen bg-gray-900 text-white flex flex-col p-4 shadow-lg"
    >
      {/* Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="mb-6">
        <FaBars className="text-2xl" />
      </button>

      {/* Sidebar Links */}
      <div className="flex flex-col gap-6">
        <button onClick={() => navigate("/dashboard")} className="flex items-center gap-4">
          <FaHome className="text-xl" />
          {isOpen && <span>Home</span>}
        </button>

        <button onClick={() => navigate("/budget-tracking")} className="flex items-center gap-4">
          <FaChartBar className="text-xl" />
          {isOpen && <span>Budget Tracking</span>}
        </button>
        <button onClick={() => navigate("/budget-goal")} className="flex items-center gap-4">
          <FaBullseye className="text-xl" />
          {isOpen && <span>Budget Goal</span>}
        </button>

        <button onClick={() => navigate("/settings")} className="flex items-center gap-4">
          <FaCog className="text-xl" />
          {isOpen && <span>Settings</span>}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
