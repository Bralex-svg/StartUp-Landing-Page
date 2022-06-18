import React, { useRef } from "react";
import "./navigation.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div>
      <header>
        <img className="logo" src={Logo} alt="logo" />
        <nav ref={navRef}>
          <a href="#home">Home</a>
          <a href="#home">Services</a>
          <a href="#home">Testimonials</a>
          <a href="#home">News</a>
          <button className="BTN">REGISTER NOW</button>
          {/* <button> */}
          <FaTimes
            size={30}
            className="nav-btn nav-close-btn"
            onClick={showNavbar}
          />
          {/* </button> */}
        </nav>
        {/* <button> */}
        <FaBars size={30} className="nav-btn" onClick={showNavbar} />
        {/* </button> */}
      </header>
    </div>
  );
}

export default Navbar;
