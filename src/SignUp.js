import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { motion } from "framer-motion"; // Import for animation

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created Successfully!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed up with Google!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-900 to-black"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Join Spendora</h2>
        <p className="text-gray-300 text-center mb-6">Create your account</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signUp}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-lg"
        >
          Sign Up
        </button>

        <p className="text-gray-400 text-center my-4">or</p>

        <button
          onClick={signUpWithGoogle}
          className="w-full flex items-center justify-center bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition duration-300 shadow-lg"
        >
          <FcGoogle className="text-2xl mr-2" />
          Sign Up with Google
        </button>

        <p className="mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <span
            className="text-purple-400 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
