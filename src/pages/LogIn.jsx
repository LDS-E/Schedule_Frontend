import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ email, password, setEmail, setPassword, handleLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Call handleLogin
    handleLogin(email, password);
    navigate("/menu-profile");
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      {/* Background Patterns */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[30deg] top-20 left-20"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[45deg] top-40 left-60"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[60deg] top-10 right-40"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[85deg] top-30 right-80"></div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">Log In</h2>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary w-full mb-4"
            onClick={handleSubmit}
          >
            Login
          </button>

          <button
            className="btn btn-ghost w-full"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
