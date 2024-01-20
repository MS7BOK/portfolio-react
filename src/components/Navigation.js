// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'; // Correct relative path

const Navigation = () => {
  return (
    <div>
      <NavLink to="/about" activeClassName="active"></NavLink>
      <NavLink to="/portfolio" activeClassName="active"></NavLink>
      <NavLink to="/contact" activeClassName="active"></NavLink>
      <NavLink to="/resume" activeClassName="active"></NavLink>
      </div>
  );
};

export default Navigation;
