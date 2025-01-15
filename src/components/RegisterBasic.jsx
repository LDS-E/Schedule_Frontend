import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterBasic = () => {
  const [userType, setUserType] = useState(""); // State to track user type
  const navigate = useNavigate(); // React Router's navigate function

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Navigate to the appropriate page based on the selected user type
    if (userType === "Regular" || userType === "Jumper") {
      navigate("/RegisterRegularJumper");
    } else if (userType === "Chief") {
      navigate("/RegisterChief");
    } else {
      alert("Please select a valid user type.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="w-full max-w-md bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">
          REGISTER AS A NEW USER
        </h2>
        <form onSubmit={handleRegister}>
          {/* User Type */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="user-type"
            >
              USER TYPE
            </label>
            <select
              id="user-type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>
                Select user type
              </option>
              <option value="Regular">Regular</option>
              <option value="Chief">Chief</option>
              <option value="Jumper">Jumper</option>
            </select>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="phone-number"
            >
              PHONE NUMBER
            </label>
            <input
              type="text"
              id="phone-number"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Contract Detail */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="contract-detail"
            >
              CONTRACT DETAIL
            </label>
            <input
              type="text"
              id="contract-detail"
              placeholder="Enter contract details"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterBasic;
