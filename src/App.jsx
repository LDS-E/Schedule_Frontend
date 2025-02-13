import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import MenuProfile from "./pages/MenuProfile";
import LogIn from "./pages/LogIn";
import RegisterBasic from "./pages/RegisterBasic";
import PageShiftApproval from "./pages/PageShiftApproval";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import ShiftScheduler from "./components/ShiftScheduler";
import MyTeam from "./pages/MyTeam";
import TeamShiftsPage from "./pages/TeamShiftsPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
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
      localStorage.setItem("currentUser", JSON.stringify(loggedUser)); 
    } else {
      alert("Invalid email or password!");
    }
  };

  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUser = localStorage.getItem("currentUser");

    if (storedIsAuthenticated === "true" && storedUser) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(storedUser)); 
    }
  }, []);

  return (
    <Router>
      <MainHeader />
      <div className="main-content">
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
          <Route path="/ShiftScheduler" element={<ShiftScheduler />} />
          <Route path="/ShiftApprovalPage" element={<PageShiftApproval />} />
          <Route path="/MyTeam" element={<MyTeam />} />
          <Route path="/TeamShiftsPage" element={<TeamShiftsPage />} />
          <Route
            path="/account-settings"
            element={
              isAuthenticated && currentUser ? (
                <AccountSettingsPage
                  isAuthenticated={isAuthenticated}
                  currentUser={currentUser}
                />
              ) : (
                <LogIn
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                />
              )
            }
          />

          <Route
            path="/menu-profile"
            element={
              isAuthenticated && currentUser ? (
                <MenuProfile
                  userType={currentUser?.nurseType}
                  userData={currentUser}
                />
              ) : (
                <LogIn
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                />
              )
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
