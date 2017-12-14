import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import './View.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <h1>One Infinite Heart</h1>
      </div>
      <div className="navbar-item-container">
        <NavLink to="/" className="navbar-item">Home</NavLink>
        <NavLink to="/clinical" className="navbar-item">Clinical Services</NavLink>
        <NavLink to="/phonesessions" className="navbar-item">Phone Sessions</NavLink>
        <NavLink to="/seminars" className="navbar-item">Professional Seminars</NavLink>
        <NavLink to="/about" className="navbar-item">About</NavLink>
        <NavLink to="/new" className="navbar-item">New</NavLink>
        <NavLink to="/contact" className="navbar-item">Contact</NavLink>
        <NavLink to="more" className="navbar-item">More...</NavLink>
      </div>
    </div>
  );
}

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
