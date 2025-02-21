import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import Navigate
import WelcomePage from "./pages/WelcomePage";
import CreateAccount from "./pages/CreateAccount";
import MenuProfile from "./pages/MenuProfile";
import Login from "./pages/Login";
import RegisterBasic from "./pages/RegisterBasic";
import ShiftApproval from "./pages/nurse/ShiftApproval";
import MyShifts from "./pages/nurse/MyShifts";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import ShiftScheduler from "./pages/chief/ShiftScheduler";
import MyTeam from "./pages/chief/MyTeam";
import TeamShifts from "./pages/chief/TeamShifts";
import AccountSettings from "./pages/AccountSettings";
import UserProfile from "./pages/UserProfile";

import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Apenas verifica o token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <MainHeader handleLogout={handleLogout} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/create-account" element={<CreateAccount />} />

          <Route path="/login" element={<Login />} />
          <Route path="/RegisterBasic" element={<RegisterBasic />} />

          {/* Rotas protegidas */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/menu-profile" element={<MenuProfile />} />
            <Route path="/ShiftScheduler" element={<ShiftScheduler />} />
            <Route path="/ShiftApproval" element={<ShiftApproval />} />
            <Route path="/MyShifts" element={<MyShifts />} />
            <Route path="/MyTeam" element={<MyTeam />} />
            <Route path="/TeamShifts" element={<TeamShifts />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

// Componente para proteger rotas
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default App;
