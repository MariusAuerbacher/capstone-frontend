import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { SET_ROLE, SET_USER } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const userRegistrationHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/register", {
        name,
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
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  

  return (
    <>
      <Container id="register">
        <Row>
          <Col xs={12} md={6}>
            <h2>Create a Donator Account</h2>
            <p>Create an account today. Simply fill in the form below and start donating</p>

            <Form onSubmit={userRegistrationHandler}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              {/*<Form.Group controlId="exampleForm.ControlInput4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm your password" />
          </Form.Group>*/}
              <input
                name="terms"
                type="checkbox"
                value="1"
                id="terms"
                className="tml-checkbox"
              ></input>
              <button
                name="submit"
                type="submit"
                className="btn btn-primary btn-block btn-xl"
              >
                Register
              </button>
            </Form>

            <ul className="tml-links">
              <li className="tml-login-link">
                <Link to="/login">Log in</Link>
              </li>
              <li className="tml-lostpassword-link">
                <Link to="/login">Lost your password?</Link>
              </li>
            </ul>
          </Col>





          <Col xs={12} md={6}>
            <h2>Registering an Institution</h2>
            <p>If you would like to register an Institution to help needy people in your community click <a href="/iregister">here</a></p>

          
          </Col>
        </Row>

    
       
    
      </Container>
    </>
  );
};

export default Register;
