import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {useDispatch} from "react-redux"
import { SET_ROLE, SET_USER } from "../redux/actions";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../css/Login.css"




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  console.log(searchParams.get("redirect"))

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", {
        email,
        password,
        rememberMe
      });
      localStorage.setItem("token", res.data.token)
      dispatch({
        type: SET_USER,
        payload: res.data.user
      })
      dispatch({
        type: SET_ROLE,
        payload: res.data.role
      })
      if(searchParams.get("redirect")){
        navigate(searchParams.get("redirect"))
      } else{
        navigate("/user-logged-in")

      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <Container id="#login" className="d-flex justify-content-center my-4 login-container">
        <Row>
          <Col xs={12} md={12}>
            <h2 className="mb-4">Sign in as User</h2>
            <p className="mb-4">Enter your registered details below</p>
            <Form onSubmit={loginHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  className="mb-3"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  className="mb-4"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <label className="d-flex mb-3">
              <input
                name="terms"
                type="checkbox"
                value={rememberMe}
                id="terms"
                className="tml-checkbox mx-2"
                aria-label="Text input with checkbox"
                onChange={(e) => {
                  setRememberMe(!rememberMe);
                }}
              >
              </input>

             Remember me
              </label>
              <button
                name="submit"
                type="submit"
                className="btn btn-primary btn-block btn-xl login-button mb-4"
              >
                Login
              </button>
             
            </Form>


            <div className="tml-links mb-5">
              
              <Link className="text-decoration-none login-link d-block mb-2" to="/register">Register</Link>
              <Link className="text-decoration-none login-link d-block mb-2" to="/ilogin">Login as an Institution</Link>
              <Link className="text-decoration-none login-link d-block mb-2" to="/reset-password">Forgot your password?</Link>
         
          </div>


          <a href="http://localhost:3001/users/auth/google">
              <Button className="mb-4 w-100" size="lg" style={{ backgroundColor: "#124a9e" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Login with Google
              </Button>
            </a>
          </Col>
        </Row>
      
      </Container>
      <hr/>
    </>
  );
};

export default Login;
