import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const [step, setStep] = useState(0); // Controla o progresso das mensagens
  const navigate = useNavigate();

  // Mensagens da "conversa"
  const messages = [
    "Hello! :)",
    "Amazing to see you here!",
    "Creating an account is quick and easy.",
    "To begin with, what type of account do you want to create?",
  ];

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full bg-blue-500 text-white py-4 text-center text-xl font-bold">
        Create Account
      </div>

      {/* Chat Box */}
      <div className="flex flex-col gap-4 p-4 w-full max-w-md">
        {messages.slice(0, step + 1).map((msg, index) => (
          <div
            key={index}
            className={`bg-blue-100 text-gray-800 p-3 rounded-lg shadow-md ${
              index % 2 === 0 ? "self-start" : "self-end bg-green-100"
            }`}
          >
            {msg}
          </div>
        ))}

        {/* Buttons (after the last message) */}
        {step === messages.length - 1 && (
          <div className="flex flex-col gap-4 mt-6">
            <button
              className="bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600"
              onClick={() => alert("Regular/Jumper Nurse selected")}
            >
              Regular/Jumper Nurse
            </button>
            <button
              className="bg-yellow-500 text-white py-2 rounded-lg shadow-md hover:bg-yellow-600"
              onClick={() => alert("Chief Nurse selected")}
            >
              Chief Nurse
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="w-full p-4">
        {step < messages.length - 1 && (
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        )}
        {step === messages.length - 1 && (
          <button
            className="w-full bg-gray-500 text-white py-2 rounded-lg shadow-md hover:bg-gray-600 mt-4"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateAccountPage;
