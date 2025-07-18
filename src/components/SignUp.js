import { useRef, useState } from "react";
import { Form, Card, Container, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import SignInNav from "./SignInNav";
import { useAuth } from "../AuthContext";
import { v4 as uuidv4 } from "uuid";
import app from "../firebase";
import firebase from "firebase";

const SignUp = () => {
  const [pharmacyName, setPharmacyName] = useState("");
  const [ddaRegNo, setDDARegNo] = useState("");
  const [panNo, setPANNo] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const contactRef = useRef();
  const emailRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const ref = app.firestore().collection("users");

  function addUser(newUser) {
    if(pharmacyName==="" || ddaRegNo==="" || panNo===""|| ownerName===""|| contact===""|| email===""){
      setError('Please Fill all the feild')
      return
    }
    if(contact.length!=10){
      alert('Contact number should be 10 ch')        
    }
    else{ 
      ref
      .doc(newUser.id)
      .set({
        ...newUser,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        window.alert("Account Registered Successfully");
        history.push("/signIn")
      })
      .catch((err) => {
        console.error(err);
      });
      
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, contactRef.current.value);
      history.push("/signIn");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="sign-up">
      <SignInNav />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", marginTop: "15vh" }}
      >
        <div className="w-100" style={{ maxWidth: "600px" }}>
          <Card>
            <Card.Body>
              <h1>Register Now</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="">
                  <Form.Label>Pharmacy Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pharmacy Name"
                    value={pharmacyName}
                    onChange={(e) => setPharmacyName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="">
                  <Form.Label>DDA Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="DDA Registration Number"
                    value={ddaRegNo}
                    onChange={(e) => setDDARegNo(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="">
                  <Form.Label>PAN Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="PAN Number"
                    value={panNo}
                    onChange={(e) => setPANNo(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="">
                  <Form.Label>Owner's Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Owner's Name"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact Number"
                    ref={contactRef}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    ref={emailRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                  />
                </Form.Group> */}

                <button
                  disabled={loading}
                  type="submit"
                  className="signUp-btn"
                  onClick={() =>
                    addUser({
                      id: uuidv4(),
                      pharmacyName,
                      ddaRegNo,
                      panNo,
                      ownerName,
                      contact,
                      email,
                    })
                  }
                >
                  Register
                </button>
              </Form>
            </Card.Body>
          </Card>

          <div
            className="w-100 text-center mt-2"
            style={{ paddingBottom: "20px" }}
          >
            Already have an account?<Link to="/signIn"> Sign In</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
