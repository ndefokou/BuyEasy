import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // // Check password length
  // if (formData.password.length < 5) {
  //   setError("Password must be at least 5 characters long.");
  //   return;
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send the registration data to the backend
      const response = await axios.post("http://localhost:8080/api/users/register", formData);
      console.log("Registration successful:", response.data);
      // Redirect or show a success message
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Registration failed:", error.message);
      } else {
        console.error("Registration failed:", error);
      }
    }
  };

  return (
    <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
      <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        {/* Sidebar Section */}
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-blue-900 to-blue-700 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
            <p className="text-[13px] text-blue-300 mt-3 leading-relaxed">
              Welcome to the buyeasy registration page! Get started by creating your account.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
            <p className="text-[13px] text-blue-300 mt-3 leading-relaxed">
              Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <form className="md:col-span-2 w-full py-6 px-6 sm:px-16" onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-gray-800 text-2xl font-bold">Create an account</h3>
          </div>

          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                I accept the{" "}
                <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="!mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none"
            >
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;


