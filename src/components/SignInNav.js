import Logo from "../img/faicon.png";
import { Link } from "react-router-dom";
import { Container, Card, Button, Alert, Modal } from "react-bootstrap";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";



const SignInNav = () => {
  const { currentUser, logout, resetPassword } = useAuth();

  const [loading, setLoading] = useState(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleClose = () => setShow(false);


  
  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/");
      // window.alert("Logged Out.");
    } catch {
      setError("Failed to log out");
      window.alert(error);
    }
  }

  
  return (
    <header id="header">
      <div className="container-fluid">
        <div id="logo" className="pull-left">
          <Link to = '/'>
            <img src={Logo} alt="" title />
          </Link>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              {(window.location.pathname==="/signIn")?'': <Link to="/history">History</Link>}
            </li>
            <li>
              {(window.location.pathname==="/profile")?
              <Button
              disabled={loading}
              className="w-100"
              type="submit"
              onClick={handleShow}
              variant="danger"
              style={{ padding: "1px 6px 1px 6px" }}
            >
              Log Out
            </Button>
              :''}
            </li>
            {/* <li>
              <Link to="/signIn">Sign In</Link>
            </li>
            <li>
              <Link to="/signUp">Register Now</Link>
            </li>
            <li>
              <Link>Log Out</Link>
            </li> */}
          </ul>
        </nav>
      </div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ready to Leave?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Select "Logout" below if you are ready to end your current session.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default SignInNav;
