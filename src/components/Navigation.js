import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import Logo from "../assets/logo.svg";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} className="logo" alt="logo" />
        <ul className="nav-links">
          <Link to="/home" className="home">
            <li>Home</li>
          </Link>
          <Link to="/service" className="service">
            <li>Service</li>
          </Link>

          <Link to="/service" className="testimonial">
            <li>Testimonial</li>
          </Link>

          <Link to="/news" className="news">
            <li>News</li>
          </Link>

          <Link to="/register" className="register">
            <li>Register Now</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
