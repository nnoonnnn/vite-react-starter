import React from 'react';
import './header.css'
function Header() {
  return (
    <div className="header-container">
      <h1 className="title">Vite React Starter</h1>

      <nav className="nav-links">
        <p className="nav-item">Home</p>
        <p className="nav-item">About</p>
        <p className="nav-item">Contact</p>
      </nav>
    </div>
  );
}

export default Header;
