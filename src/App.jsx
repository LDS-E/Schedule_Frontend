import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import MenuProfile from "./pages/MenuProfile";
import LogIn from "./pages/LogIn";
import RegisterBasic from "./pages/RegisterBasic";
import RegisterRegularJumper from "./pages/RegisterRegularJumper";
import RegisterChief from "./pages/RegisterChief";
import PageShiftApproval from "./pages/PageShiftApproval";
import MainHeader from "./components/MainHeader"; // Novo Header
import Footer from "./components/Footer"; // Novo Footer
import ShiftScheduler from "./components/ShiftScheduler";
import MyTeamPage from "./pages/MyTeamPage";
import TeamShiftsPage from "./pages/TeamSchiftsPage";
import usersData from "./data/users.json";

import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    const loggedUser = usersData.find(
      (user) => user.email === email && user.password === password
    );
    if (loggedUser) {
      setIsAuthenticated(true);
      setCurrentUser(loggedUser);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Invalid email or password!");
    }
  };

  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
    if (storedIsAuthenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <MainHeader /> {/* Header visível em todas as páginas */}
      <div className="main-content">
        {" "}
        {/* Wrapper para manter o conteúdo alinhado */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route
            path="/login"
            element={
              <LogIn
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            }
          />
          <Route path="/RegisterBasic" element={<RegisterBasic />} />
          <Route
            path="/RegisterRegularJumper"
            element={<RegisterRegularJumper />}
          />
          <Route path="/RegisterChief" element={<RegisterChief />} />
          <Route path="/ShiftScheduler" element={<ShiftScheduler />} />
          <Route path="/ShiftApprovalPage" element={<PageShiftApproval />} />
          <Route path="/MyTeamPage" element={<MyTeamPage />} />
          <Route path="/TeamShiftsPage" element={<TeamShiftsPage />} />
          <Route
            path="/menu-profile"
            element={
              isAuthenticated ? (
                <MenuProfile
                  userType={currentUser?.nurseType}
                  userData={currentUser}
                />
              ) : (
                <div>Please log in first.</div>
              )
            }
          />
        </Routes>
      </div>
      <Footer /> {/* Footer visível em todas as páginas */}
    </Router>
  );
};

export default App;
