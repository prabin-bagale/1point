import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../img/faicon.png";

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
console.log(props)
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <a href="#intro">
            <img className="logo" src={Logo} alt="Logo" />
          </a>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#intro" className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={closeMobileMenu}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <Link to="/SignIn" className="nav-links" onClick={closeMobileMenu}>LogIn</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
