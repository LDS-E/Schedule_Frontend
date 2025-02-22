import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Login from "./pages/Login";
import MenuProfile from "./pages/MenuProfile";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import WelcomePage from "./pages/WelcomePage";
import CreateAccount from "./pages/CreateAccount";
import RegisterBasic from "./pages/RegisterBasic";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { clearUser } = useContext(AuthContext);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Router>
      <MainHeader
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        clearUser={clearUser}
      />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/RegisterBasic" element={<RegisterBasic />} />
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <MenuProfile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;
