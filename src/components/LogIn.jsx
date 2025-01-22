import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "user@example.com" && password === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/menu-profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="w-80 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">Log In</h2>

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Botão de Voltar para a Home */}
        <button
          className="w-full mt-4 bg-gray-500 text-white py-2 rounded-lg shadow-md hover:bg-gray-600"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default LogIn;
