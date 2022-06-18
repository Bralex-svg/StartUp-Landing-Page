import React from "react";
import "./navbar.css";
import Logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" />
      <ul className="UnorderList ">
        <li className="listItems">Home</li>
        <li className="listItems">Company</li>
        <li className="listItems">Resources</li>
        <button>Contact</button>
      </ul>
    </div>
  );
}

export default Navbar;
