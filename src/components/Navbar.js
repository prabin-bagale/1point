import { useState } from "react";
import Logo from "../img/faicon.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {

  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/");
      window.alert("Logged Out.");
    } catch {
      setError("Failed to log out");
      window.alert(error);
    }
  }

  return (
    <>
      <header id="header">
        <div className="container-fluid">
          <div id="logo" className="pull-left">
            <a href="#intro">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <nav id="nav-menu-container">
            <div className="menu-icon" onClick={handleClick}>
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
              <li className="menu-active">
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li class="menu-has-children">
                <a>Profile</a>
                <ul>
                  <li>
                    <Link to="/profile">Profile Details</Link>
                  </li>
                  <li>
                    <Link to="/signUp">Register Now</Link>
                  </li>
                  <li>
                    <Link to="/signIn">Sign In</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>Log Out</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
