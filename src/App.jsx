import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CreateAccountPage from "./components/CreateAccountPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuProfile from "./pages/MenuProfile";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LogIn from "./components/LogIn";
import RegisterBasic from "./components/RegisterBasic";
import RegisterRegularJumper from "./components/RegisterRegularJumper";
import RegisterChief from "./components/RegisterChief";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route
          path="/menu-profile"
          element={<MenuProfile userType="Chief" userData={userData} />}
        />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/RegisterBasic" element={<RegisterBasic />} />
        <Route
          path="/RegisterRegularJumper"
          element={<RegisterRegularJumper />}
        />
        <Route path="/RegisterChief" element={<RegisterChief />} />
      </Routes>
    </Router>
  );
};


export default App;
