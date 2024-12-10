// src/pages/WelcomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to ShopEasy</h1>
        <p className="text-gray-600 mt-4">
          Your one-stop destination for amazing deals and a seamless shopping experience.
        </p>
        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md shadow-md"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-md shadow-md"
          >
            Register
          </button>
          <button
            onClick={() => alert("Explore feature coming soon!")}
            className="w-full py-3 px-4 bg-gray-500 hover:bg-gray-600 text-white text-sm font-semibold rounded-md shadow-md"
          >
            Explore Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
