import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuProfile from "./pages/MenuProfile";

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
        <Route
          path="/menu-profile"
          element={<MenuProfile userType="Chief" userData={userData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
