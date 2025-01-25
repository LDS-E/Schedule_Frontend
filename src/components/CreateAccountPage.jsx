import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const [step, setStep] = useState(0); // Controla o progresso das mensagens
  const navigate = useNavigate();

  // Mensagens da aplicação
  const messages = [
    "Hello! :)",
    "Amazing to see you here!",
    "Creating an account is quick and easy.",
    "To begin with, what type of account do you want to create?",
  ];

  // Exibir mensagens automaticamente
  useEffect(() => {
    if (step < messages.length) {
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 200); // Tempo de atraso de 200ms
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full bg-blue-500 text-white py-4 text-center text-xl font-bold">
        Create Account
      </div>

      {/* Chat Box */}
      <div className="flex flex-col gap-4 p-4 w-full max-w-md">
        {messages.slice(0, step).map((msg, index) => (
          <div
            key={index}
            className="bg-blue-100 text-gray-800 p-3 rounded-lg shadow-md self-start"
          >
            {msg}
          </div>
        ))}

        {step === messages.length && (
          <div className="flex flex-col gap-4 mt-6">
            <button
              className="bg-cyan-500 text-white py-2 rounded-lg shadow-md hover:bg-yellow-600"
              onClick={() => navigate("/RegisterBasic")}
            >
              Create new account
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      {step === messages.length && (
        <div className="w-full p-4">
          <button
            className="w-full bg-gray-500 text-white py-2 rounded-lg shadow-md hover:bg-gray-600 mt-4"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateAccountPage;
