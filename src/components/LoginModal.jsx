import { useState } from "react";

const LoginModal = ({ isOpen, closeModal, user }) => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-4/5 max-w-sm shadow-lg relative">
        {/* close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          onClick={closeModal}
        >
          &times; {/* X button */}
        </button>

        {/* Inicial display */}
        {!showPasswordForm ? (
          <>
            {/* Avatar e Saudação */}
            <div className="flex flex-col items-center mb-6">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full mb-2"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold">
                  {user.name[0].toUpperCase()}
                </div>
              )}
              <h2 className="text-xl font-semibold">Hello, {user.name}</h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button
                className="w-full bg-gray-100 py-2 rounded-lg text-gray-700 border border-gray-400 hover:bg-gray-200"
                onClick={() => alert("Logged in with another account")}
              >
                Log in with another account
              </button>
              <button
                className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
                onClick={() => setShowPasswordForm(true)}
              >
                Login
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Formulário de Senha */}
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-xl font-semibold">Welcome Back!</h2>
              <p className="text-gray-500 text-sm mb-4">
                Log in with your standard account
              </p>
            </div>

            <form className="flex flex-col gap-4">
              {/* User field (non editable) */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  User/E-mail
                </label>
                <input
                  id="username"
                  type="text"
                  value={user.email || user.name}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-600"
                />
              </div>

              {/* Password field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Login realizado!");
                }}
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
