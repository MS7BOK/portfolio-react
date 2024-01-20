// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Correct relative path

const Header = () => {
  return (
    <header>
      <h1>Maximilian</h1>
      <nav>
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
      </nav>
    </header>
  );
};

export default Header;
