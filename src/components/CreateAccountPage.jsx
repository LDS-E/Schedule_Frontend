import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const [step, setStep] = useState(0);
  const [showButtons, setShowButtons] = useState(false); // Para mostrar botões após delay
  const navigate = useNavigate();

  // Mensagens da aplicação
  const messages = [
    "Hello! :)",
    "Amazing to see you here!",
    "Creating an account is quick and easy.",
    "To begin with, click on 'Create New Account'?",
  ];

  // Exibir mensagens automaticamente
  useEffect(() => {
    if (step < messages.length) {
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      // Delay para mostrar os botões depois da última mensagem
      const buttonTimer = setTimeout(() => {
        setShowButtons(true);
      }, 500);
      return () => clearTimeout(buttonTimer);
    }
  }, [step]);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 py-6">
      {/* Header */}
      <div className="w-full bg-blue-500 text-white py-4 text-center text-xl font-bold">
        Create Account
      </div>

      {/* Chat Box (altura fixa para evitar deslocamento da página) */}
      <div className="flex flex-col gap-4 p-4 w-full max-w-md min-h-[300px]">
        {messages.slice(0, step).map((msg, index) => (
          <div
            key={index}
            className="bg-blue-100 text-gray-800 p-3 rounded-lg shadow-md self-start opacity-100 transition-opacity duration-500"
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Espaço reservado para os botões */}
      <div className="w-full max-w-md flex flex-col gap-2 mt-4 min-h-[80px]">
        {showButtons && (
          <>
            <button
              className="bg-cyan-500 text-white text-sm py-2 rounded-md shadow-md hover:bg-cyan-600"
              onClick={() => navigate("/RegisterBasic")}
            >
              Create New Account
            </button>
            <button
              className="bg-gray-500 text-white text-sm py-2 rounded-md shadow-md hover:bg-gray-600"
              onClick={() => navigate("/")}
            >
              Back to Initial Page
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateAccountPage;
