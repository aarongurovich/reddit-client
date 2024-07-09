// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logowed.png'; // Import your logo image

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links">
          <h1>Weddit</h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
