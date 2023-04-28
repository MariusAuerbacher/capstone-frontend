import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {useDispatch} from "react-redux"
import { SET_ROLE, SET_USER } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", {
        email,
        password,
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
      navigate("/cards")
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <Container id="#login">
        <Row>
          <Col xs={12} md={6}>
            <h2>Sign in</h2>
            <p>Enter your registered details below</p>
            <Form onSubmit={loginHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <div class="tml-field-wrap tml-rememberme-wrap">
                <input
                  name="rememberme"
                  type="checkbox"
                  value="forever"
                  id="rememberme"
                  class="tml-checkbox"
                />
                <label class="tml-label" for="rememberme">
                  Remember Me
                </label>
              </div>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>

            <ul class="tml-links">
              <li class="tml-register-link">
                <Link to="/register">Register</Link>
              </li>
              <li class="tml-lostpassword-link">
                <Link to="/register">Forgot your password?</Link>
              </li>
              <li class="tml-register-link">
                <Link to="/ilogin">Login as an Institution</Link>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Login;
