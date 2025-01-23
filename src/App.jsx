import { useState } from "react";
import LogIn from "./components/LogIn";
import RegisterBasic from "./components/RegisterBasic";
import RegisterRegularJumper from "./components/RegisterRegularJumper";
import RegisterChief from "./components/RegisterChief";
import CalendarChief from "./components/CalendarChief";
import ShiftForm from "./components/ShiftForm";
import NurseList from "./components/NurseList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Add this for navigation
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
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} /> {/* Default route */}
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/RegisterBasic" element={<RegisterBasic />} />
        <Route
          path="/RegisterRegularJumper"
          element={<RegisterRegularJumper />}
        />
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
      </Routes>
    </Router>
  );
}

export default App;
