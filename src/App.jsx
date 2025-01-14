import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LogIn from "./components/LogIn";
import RegisterBasic from "./components/RegisterBasic";
import RegisterRegularJumper from "./components/RegisterRegularJumper";
import RegisterChief from "./components/RegisterChief";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/RegisterBasic" element={<RegisterBasic />} />
        <Route
          path="/RegisterRegularJumpers"
          element={<RegisterRegularJumper />}
        />
        <Route path="/RegisterChief" element={<RegisterChief />} />
      </Routes>
    </Router>
  );
}

export default App;
