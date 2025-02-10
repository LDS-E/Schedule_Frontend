import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-[90%] h-[90%] border-[2px] border-[#4A00FF] rounded-lg transform rotate-12 opacity-40"></div>
        <div className="absolute w-[75%] h-[75%] border-[2px] border-[#4A00FF] rounded-lg transform -rotate-12 opacity-30"></div>
        <div className="absolute w-[60%] h-[60%] border-[2px] border-[#4A00FF] rounded-lg transform rotate-6 opacity-20"></div>
      </div>

      <div className="mb-6 relative">
        <img
          src="https://via.placeholder.com/100"
          alt="Nurse Scheduling Logo"
          className="w-20 h-20 rounded-full shadow-md"
        />
      </div>

      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 relative">
        Nurse Scheduling
      </h1>

      <div className="flex flex-col items-center space-y-4 w-64 relative">
        <Link to="/create-account">
          <button className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Create an Account
          </button>
        </Link>

        <Link to="/login">
          <button className="w-full px-6 py-3 text-lg font-semibold text-white bg-[#4A00FF] rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
