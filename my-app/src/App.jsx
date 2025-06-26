import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import GooeyNav from "./components/GooeyNav";
import DotGrid from "./components/Backgrounds/DotGrid";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import Footer from './components/Footer'; 

import logo from './assets/logo.svg';
import "./App.css"; 

function AppWrapper() {
  const navigate = useNavigate();

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (item) => {
    if (window.location.pathname === item.path) {
      window.location.reload();
    } else {
      navigate(item.path); 
    }
  };

  return (
    <div className="app-container">
      <div className="dotgrid-background">
        <DotGrid followCursor={true} />
      </div>

      <div className="navbar">
        <GooeyNav
          items={navItems}
          onNavClick={handleNavClick}
          logo={
            <img
              src={logo}
              alt="Logo"
              className="nav-logo"
              style={{ height: "45px"}}
            />
          }
        />
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;