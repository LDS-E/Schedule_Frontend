import React, { useState } from "react";
import {
  FaBars,
  FaCog,
  FaSignOutAlt,
  FaPalette,
  FaLanguage,
} from "react-icons/fa";

const MenuProfileHeader = ({ userData }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    alert("Logging out...");
    // Aqui podemos implementar o logout real.
  };

  return (
    <div className="bg-blue-500 text-white flex items-center justify-between px-4 py-2 shadow-lg relative">
      {/* Avatar do Usuário */}
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-blue-500 font-bold text-xl">
          {userData.avatar || "U"}
        </div>
        <div className="ml-2">
          <div className="text-sm font-bold">{userData.name || "User"}</div>
          <div className="text-xs">{userData.department || "Department"}</div>
        </div>
      </div>

      {/* Nome Instituição e Departamento (Centralizado) */}
      <div className="text-center">
        <div className="text-lg font-semibold">
          {userData.institution || "Institution"}
        </div>
        <div className="text-sm italic">
          {userData.department || "Cardiology"}
        </div>
      </div>

      {/* Logo e Menu Hamburguer */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="text-2xl font-bold">App</div>

        {/* Hamburguer Menu */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none hover:text-gray-300"
        >
          <FaBars size={24} />
        </button>

        {/* Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 bg-white text-black rounded-md shadow-lg w-48">
            <ul className="flex flex-col p-2">
              <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                <FaCog className="mr-2" />
                Settings
              </li>
              <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                <FaPalette className="mr-2" />
                Theme
              </li>
              <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                <FaLanguage className="mr-2" />
                Language
              </li>
              <li
                onClick={handleLogout}
                className="flex items-center p-2 hover:bg-red-100 cursor-pointer text-red-500"
              >
                <FaSignOutAlt className="mr-2" />
                Log Out
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuProfileHeader;
