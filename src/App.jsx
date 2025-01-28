import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CreateAccountPage from "./components/CreateAccountPage";
import MenuProfile from "./pages/MenuProfile";
import LogIn from "./components/LogIn";
import RegisterBasic from "./components/RegisterBasic";
import RegisterRegularJumper from "./components/RegisterRegularJumper";
import RegisterChief from "./components/RegisterChief";
import CalendarChief from "./components/CalendarChief";
import ShiftForm from "./components/ShiftForm";
import NurseList from "./components/NurseList";
import PageShiftApproval from "./pages/PageShiftApproval";
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
      // Já está autenticado, então não precisamos fazer nada
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
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
        <Route path="/CalendarChief" element={<CalendarChief />} />
        <Route path="/ShiftForm" element={<ShiftForm />} />
        <Route path="/NurseList" element={<NurseList />} />
        <Route path="/ShiftApprovalPage" element={<PageShiftApproval />} />
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
    </Router>
  );
};

export default App;
