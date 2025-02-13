import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const [step, setStep] = useState(0);
  const [showButtons, setShowButtons] = useState(false); // btn delay
  const navigate = useNavigate();

  const messages = [
    "Hello! :)",
    "Amazing to see you here!",
    "Creating an account is quick and easy.",
    "To begin with, click on 'Create New Account'?",
  ];

  useEffect(() => {
    if (step < messages.length) {
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      // Delay for btns
      const buttonTimer = setTimeout(() => {
        setShowButtons(true);
      }, 500);
      return () => clearTimeout(buttonTimer);
    }
  }, [step]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className="chat-container flex flex-col gap-4 w-full max-w-md p-4 overflow-hidden min-h-[200px]">
        {messages.slice(0, step).map((msg, index) => (
          <div key={index} className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-bubble">{msg}</div>
          </div>
        ))}
      </div>

      {/* Espaço reservado para os botões */}
      <div className="w-full max-w-md flex flex-col gap-2 mt-4 min-h-[80px]">
        {showButtons && (
          <>
            <button
              className="btn btn-primary w-full mb-4"
              onClick={() => navigate("/RegisterBasic")}
            >
              Create New Account
            </button>
            <button
              className="btn btn-ghost w-full"
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
