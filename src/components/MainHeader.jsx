import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ícones do Lucide

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 fixed w-full top-0 shadow-md z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* LOGO */}
        <h1 className="text-xl font-bold">HealthCare App</h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/profile" className="hover:text-gray-300">
            Perfil
          </Link>
          <Link to="/shifts" className="hover:text-gray-300">
            Turnos
          </Link>
        </nav>

        {/* BOTÃO MENU MOBILE */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-700 flex flex-col items-center p-4 space-y-4 md:hidden">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/profile" className="hover:text-gray-300">
            Perfil
          </Link>
          <Link to="/shifts" className="hover:text-gray-300">
            Turnos
          </Link>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
