import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {useDispatch} from "react-redux"
import { SET_ROLE, SET_USER } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";




const InstitutionsLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const InstitutionLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/institutions/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token)
      dispatch({
        type: SET_USER,
        payload: res.data.institution
      })
      dispatch({
        type: SET_ROLE,
        payload: res.data.role
      })
      navigate("/institutionbeneficiaries")
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
        <Container id="#login" className="d-flex justify-content-center my-5 login-container">
        <Row>
          <Col xs={12} md={12}>
            <h2 className="mb-4">Sign in</h2>
            <p className="mb-4">Enter your registered details below</p>
            <Form onSubmit={InstitutionLoginHandler }>
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
                value="value"
                id="terms"
                className="tml-checkbox mx-2"
                aria-label="Text input with checkbox"
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
              
              <Link className="text-decoration-none login-link d-block mb-2" to="/login">Register</Link>
              <Link className="text-decoration-none login-link d-block mb-2" to="/login">Login as a User</Link>
              <Link className="text-decoration-none login-link d-block mb-2" to="/login">Forgot your password?</Link>
         
          </div>
          </Col>
        </Row>
      
      </Container>
    
      <hr/>
    </>
  );
};

export default InstitutionsLogin ;