import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CreateAccountPage from "./components/CreateAccountPage";
import MenuProfile from "./pages/MenuProfile";
import LogIn from "./components/LogIn";
import RegisterBasic from "./components/RegisterBasic";
import RegisterRegularJumper from "./components/RegisterRegularJumper";
import RegisterChief from "./components/RegisterChief";
import PrivateRoute from "./components/PrivateRoute"; // Importando a Rota Protegida
import "./App.css";

const App = () => {
  const userData = {
    avatar: "https://via.placeholder.com/50",
    name: "Adriana",
    institution: "Health Care Institute",
    department: "Cardiology",
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/RegisterBasic" element={<RegisterBasic />} />
        <Route
          path="/RegisterRegularJumper"
          element={<RegisterRegularJumper />}
        />
        <Route path="/RegisterChief" element={<RegisterChief />} />

        {/* Rota protegida */}
        <Route
          path="/menu-profile"
          element={
            <PrivateRoute>
              <MenuProfile userType="Chief" userData={userData} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
