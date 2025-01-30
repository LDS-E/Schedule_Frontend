import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Nurse Scheduling</h1>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <Link to="/create-account">
          <button className="btn btn-secondary w-full mb-4">
            Create an Account
          </button>
        </Link>

        <Link to="/login">
          <button className="btn btn-primary w-full mb-4">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
