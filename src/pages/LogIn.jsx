import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ email, password, setEmail, setPassword, handleLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Chama a função handleLogin que está sendo passada como prop
    handleLogin(email, password);
    navigate("/menu-profile");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Log In</h2>

        {/* Campo de Email */}
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

        {/* Campo de Senha */}
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

        {/* Botão de Login */}
        <button className="btn btn-primary w-full mb-4" onClick={handleSubmit}>
          Login
        </button>

        {/* Botão de Voltar */}
        <button className="btn btn-ghost w-full" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default LogIn;
