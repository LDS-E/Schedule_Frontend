import { useState } from "react";
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
import PrivateRoute from "./components/PrivateRoute"; // Importação corrigida
import "./App.css";

const App = () => {
  const [shifts, setShifts] = useState({});
  const [nurses, setNurses] = useState([
    { id: 1, name: "Alice", nurseType: "RN" },
    { id: 2, name: "Bob", nurseType: "LPN" },
  ]);

  // Função corrigida para adicionar turnos ao calendário
  const handleAddShift = (date, shiftData) => {
    const day = parseInt(date.split("-")[2]);
    setShifts((prevShifts) => ({
      ...prevShifts,
      [day]: [...(prevShifts[day] || []), shiftData],
    }));
  };

  // Dados do usuário (simulação)
  const userData = {
    avatar: "https://via.placeholder.com/50",
    name: "Adriana",
    institution: "Health Care Institute",
    department: "Cardiology",
  };

  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/RegisterBasic" element={<RegisterBasic />} />
        <Route
          path="/RegisterRegularJumper"
          element={<RegisterRegularJumper />}
        />
        <Route path="/RegisterChief" element={<RegisterChief />} />

        {/* Rotas para o gerenciamento dos turnos */}
        <Route
          path="/CalendarChief"
          element={<CalendarChief shifts={shifts} />}
        />
        <Route
          path="/ShiftForm"
          element={<ShiftForm nurses={nurses} onAddShift={handleAddShift} />}
        />
        <Route path="/NurseList" element={<NurseList nurses={nurses} />} />

        {/* Rota protegida para o perfil do usuário */}
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
