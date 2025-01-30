import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import RegisterBasic from "./components/RegisterBasic";
import RegisterRegularJumper from "./components/RegisterRegularJumper";
import RegisterChief from "./components/RegisterChief";
import ShiftScheduler from "./components/ShiftScheduler";
import "./App.css";

function App() {
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
        <Route path="/ShiftScheduler" element={<ShiftScheduler />} />
      </Routes>
    </Router>
  );
}

export default App;
