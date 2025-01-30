import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Sun, Moon } from "lucide-react";

const MainHeader = ({ user, toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar bg-blue-600 text-white fixed w-full top-0 shadow-md z-50">
      {/* Menu Dropdown na esquerda */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={26} />
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content bg-blue-500 rounded-box shadow ${
              isOpen ? "" : "hidden"
            }`}
          >
            <li>
              <Link to="/" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <button className="btn btn-ghost">
                {" "}
                {/* change this btn fo a link */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button onClick={toggleTheme} className="btn btn-ghost">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/settings" className="btn btn-ghost">
                    Account Settings
                  </Link>
                </li>
                <li>
                  <button className="btn btn-ghost">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          HealthCare App
        </Link>
      </div>

      <div className="navbar-end">
        {/* older */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* Avatar/Login */}
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm">Hello, {user.name}</span>
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full border border-white"
            />
          </div>
        ) : (
          <Link to="/login" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 21v-2a4 4 0 00-8 0v2m8-10a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
