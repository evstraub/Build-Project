import React from 'react';
import '../app/globals.css';

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#" className="logo">
          App
        </a>

        <ul className="nav-links">
          <li><a href="#" className="nav-link active">Home</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">Pricing</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
