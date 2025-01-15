import React from "react";

const LogIn = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="w-80 bg-white p-6 rounded-lg shadow-md">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="email"
        >
          EMAIL
        </label>
        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />

        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="password"
        >
          PASSWORD
        </label>
        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
};

export default LogIn;
