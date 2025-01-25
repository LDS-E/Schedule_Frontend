import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

const WelcomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = {
    name: "Adriana",
    avatar: null, // user photo
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Nurse Scheduling</h1>
      </div>

      {/* buttons */}
      <div className="w-4/5 max-w-xs">
        <Link to="/create-account">
          <button className="w-full bg-yellow-500 text-white py-3 rounded-lg text-lg mb-4 shadow-lg hover:bg-yellow-600">
            Create an Account
          </button>
        </Link>
        <button
          className="w-full border border-gray-400 py-3 rounded-lg text-lg shadow-lg hover:bg-gray-100"
          onClick={() => setIsModalOpen(true)}
        >
          I already have an account
        </button>
      </div>

      {/* Modal */}
      <LoginModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        user={user}
      />
    </div>
  );
};

export default WelcomePage;
