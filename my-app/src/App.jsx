import React from "react";
import GooeyNav from "./components/GooeyNav";
import DotGrid from "./components/Backgrounds/DotGrid";
import HomePage from './pages/Home'
import logo from './assets/logo.svg'
import "./App.css";

function App() {
  const navItems = [
    { label: "About" },
    { label: "Projects" },
    { label: "Contact" },
  ];

  const handleNavClick = (label) => {
    console.log(`You clicked on: ${label}`);
  };

  return (
    <div className="app-container">
      {/* 🪩 Background DotGrid */}
      <div className="dotgrid-background">
        <DotGrid followCursor={true} />
      </div>

    <div className="navbar">
      <GooeyNav
        items={navItems}
        onNavClick={handleNavClick}
        logo={<img src={logo} alt="Logo" className="nav-logo" />}
      />
    </div>

      {/* 💬 Main Content */}
      <main className="main-content">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
