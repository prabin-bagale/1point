import { Form, Card, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SignInNav from "./SignInNav";
import { useRef, useState } from "react";
import { useAuth } from "../AuthContext";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [sucess] = useState('Sucess')

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/", { state: sucess });


    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  const togglePassword=()=> {
    var x = document.getElementById("inputPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="sign-in">
      <SignInNav />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h1>Sign In</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    ref={emailRef}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    id = "inputPassword"
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                  />
                </Form.Group>
                <input className="mb-3" type="checkbox" onClick={togglePassword}/>Show Password<br/>
                <Link to='/reset-password'>Forgot Password ?</Link>
                <br />
                <button disabled={loading} type="submit" className="signIn-btn">
                  Sign In
                </button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signUp">Sign Up</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
