import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar bg-blue-600 text-white fixed w-full top-0 shadow-md z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content bg-blue-500 rounded-box shadow ${
              isOpen ? "" : "hidden"
            }`}
          >
            <li>
              <Link to="/" className="btn btn-ghost btn-circle">
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
              <Link to="/profile" className="btn btn-ghost btn-circle">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/shifts" className="btn btn-ghost btn-circle">
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
                    d="M19.428 15.338a7.975 7.975 0 001.268-3.295 7.98 7.98 0 00-1.268-3.295l1.42-1.42a1 1 0 00.148-1.115l-2-3.464a1 1 0 00-1.115-.49l-2.49 1a7.943 7.943 0 00-2.008-.667V2.5a1 1 0 00-1-1h-4a1 1 0 00-1 1v2.504a7.943 7.943 0 00-2.008.667l-2.49-1a1 1 0 00-1.115.49l-2 3.464a1 1 0 00.148 1.115l1.42 1.42a7.975 7.975 0 00-1.268 3.295 7.98 7.98 0 001.268 3.295l-1.42 1.42a1 1 0 00-.148 1.115l2 3.464a1 1 0 001.115.49l2.49-1a7.943 7.943 0 002.008.667V21.5a1 1 0 001 1h4a1 1 0 001-1v-2.504a7.943 7.943 0 002.008-.667l2.49 1a1 1 0 001.115-.49l2-3.464a1 1 0 00-.148-1.115l-1.42-1.42a7.975 7.975 0 000-3.295zM12 15a3 3 0 110-6 3 3 0 010 6z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          HealthCare App
        </Link>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
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
      </div>
    </header>
  );
};

export default MainHeader;
