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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [shifts, setShifts] = useState({});
  const [nurses, setNurses] = useState([
    { id: 1, name: "Alice", nurseType: "RN" },
    { id: 2, name: "Bob", nurseType: "LPN" },
  ]);

  const handleAddShift = (date, shiftData) => {
    const day = parseInt(date.split("-")[2]);
    setShifts((prevShifts) => ({
      ...prevShifts,
      [day]: [...(prevShifts[day] || []), shiftData],
    }));
    
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
          element={<RegisterRegularJumper />} />
        <Route path="/RegisterChief" element={<RegisterChief />} />
        <Route
          path="/CalendarChief"
          element={<CalendarChief shifts={shifts} />}
        />
        <Route
          path="/ShiftForm"
          element={<ShiftForm nurses={nurses} onAddShift={handleAddShift} />}
        />
        <Route path="/NurseList" element={<NurseList nurses={nurses} />} />

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
