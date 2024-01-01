import React from "react";
import { Link } from "react-router-dom";
import "./styling/Navbar.css";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="img" src={logo} alt="logo" />
      </div>
      <div className="navbar-container">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/exercises" className="navbar-link">
          Exercises
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
