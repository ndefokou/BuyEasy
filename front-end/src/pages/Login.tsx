// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null); // State to manage errors
  const navigate = useNavigate(); // For redirecting after successful login

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error on form submission

    try {
      // Simulating the login API call
      const response = await fetch("https://your-api-endpoint.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      const data = await response.json();
      
      // Assuming the response contains a token or user data
      localStorage.setItem("authToken", data.token); // Storing auth token in localStorage (optional)
      navigate("/dashboard"); // Redirect to the dashboard on successful login
    } catch (error: any) {
      setError(error.message); // Display error if login fails
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="font-[sans-serif] bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Please login to your account</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        {/* Footer */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
