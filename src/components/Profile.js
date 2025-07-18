import React, { useEffect, useState } from "react";
import SignInNav from "./SignInNav";
import { useAuth } from "../AuthContext";
import { Container, Card, Button, Alert, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {db} from "../firebase";


export default function Profile() {
  const { currentUser, logout, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [profileData,setProfileData] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleResetPassword(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(currentUser.email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  // async function handleLogout() {
  //   setError("");
  //   try {
  //     await logout();
  //     history.push("/");
  //     // window.alert("Logged Out.");
  //   } catch {
  //     setError("Failed to log out");
  //     window.alert(error);
  //   }
  // }

  useEffect(()=>{
    db.collection('users').where("email","==",currentUser.email).get().then(snapshot=>{
      let data = []
      snapshot.forEach(doc=>{
        const userData = doc.data()
        data.push(userData)
        setProfileData(userData)
        console.log(userData)
      })
    }).catch(error=> console.log(error))
  },[])

  return (
    <div className="Profile">
      <SignInNav />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-2">PROFILE </h2>
              <hr/>

              <div className="user-profile-detail">
                <table cellPadding="5">
                  <tr>
                    <td className="font-weight-bold">Pharmacy Name</td>
                    <td>{profileData.pharmacyName}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">PAN Number</td>
                    <td>{profileData.panNo}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Registration Number</td>
                    <td>{profileData.ddaRegNo}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Owner Name</td>
                    <td>{profileData.ownerName}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Email</td>
                    <td>{currentUser.email}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Contact</td>
                    <td>{profileData.contact}</td>
                  </tr>
                </table>
                <hr/>
              </div>
              <Button
                disabled={loading}
                className="w-100"
                type="submit"
                onClick={handleResetPassword}
              >
                Reset Password
              </Button>
              {/* <Button
                disabled={loading}
                className="w-100"
                type="submit"
                onClick={handleShow}
                variant="danger"
                style={{ marginTop: "20px" }}
              >
                Log Out
              </Button> */}

              <br />
              <br />
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
            </Card.Body>
          </Card>
        </div>
      </Container>
{/* 
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
      </Modal> */}
    </div>
  );
}
