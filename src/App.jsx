import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import CreateAccount from "./pages/CreateAccount";
import MenuProfile from "./pages/MenuProfile";
import Login from "./pages/Login";
import RegisterBasic from "./pages/RegisterBasic";
import ShiftApproval from "./pages/nurse/ShiftApproval";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import ShiftScheduler from "./pages/chief/ShiftScheduler";
import MyTeam from "./pages/chief/MyTeam";
import TeamShifts from "./pages/chief/TeamShifts";
import AccountSettings from "./pages/AccountSettings";
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
          <Route path="/create-account" element={<CreateAccount />} />

          <Route
            path="/login"
            element={
              <Login
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
          <Route path="/ShiftApproval" element={<ShiftApproval />} />
          <Route path="/MyTeam" element={<MyTeam />} />
          <Route path="/TeamShifts" element={<TeamShifts />} />
          <Route
            path="/account-settings"
            element={
              isAuthenticated && currentUser ? (
                <AccountSettings
                  isAuthenticated={isAuthenticated}
                  currentUser={currentUser}
                />
              ) : (
                <Login
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
                <Login
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
