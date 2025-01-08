import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Navbar">
      <img src="./src/assets/hutao.gif" alt="logo" className="logo" />
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`ul ${menuOpen ? "menuopen" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
