import React from "react";
import Header from "./components/LandingScreens/Header";
import Home from "./components/LandingScreens/Home";
import Contact from "./components/LandingScreens/Contact";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/LandingScreens/Login";
// import Dashboard from "./components/LandingScreens/adminComponents/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Header based on the current route */}
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
};

export default App;
