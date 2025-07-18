import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/faicon.png";

const List = ({ style }) => {
  return (
    <ul className="nav-menu" style={style}>
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
      <Link to="/profile">Profile</Link>
        {/* <ul>
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
            <Link>Log Out</Link>
          </li>
        </ul> */}
      </li>
    </ul>
  );
};

const MobileList = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <a
        onClick={() => {
          setActive(!active);
        }}
      >
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        {/* {active ? 'fas fa-times' : 'fas fa-bars'}
        {active ? "Close" : "Show"} Menu */}
      </a>
      {active && (
        <List
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            listStyle: "none",
            paddingBottom: "10px",
            width: "100%",
            // marginLeft: "100%"
          }}
        />
      )}
    </>
  );
};

const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    });
  }, []);
  return (
    <header id="header">
      <div className="container-fluid">
        <div id="logo" className="pull-left">
          <a href="#intro">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <nav id="nav-menu-container">
          {isMobile ? (
            <MobileList />
          ) : (
            <List
              style={{
                display: "flex",
                justifyContent: "space-between",
                listStyle: "none",
                paddingRight: "10px",
              }}
            />
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
