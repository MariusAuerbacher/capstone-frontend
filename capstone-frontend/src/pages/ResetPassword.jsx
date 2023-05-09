import axios from "axios";
import React, { useState } from "react";
import {Col, Container, Form, Row } from "react-bootstrap";
import {useDispatch} from "react-redux"
import { SET_ROLE, SET_USER } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css"




const ResetPassword = () => {
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
      <Container id="#login" className="d-flex justify-content-center my-4 login-container">
        <Row>
          <Col xs={12} md={12}>
            <h2 className="mb-4">Enter your email</h2>
            <p className="mb-4">We will send you a new password</p>
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

              <button
                name="submit"
                type="submit"
                className="btn btn-primary btn-block btn-xl login-button mb-4"
              >
                Submit
              </button>
             
            </Form>


            <div className="tml-links mb-5">
              
              <Link className="text-decoration-none login-link d-block mb-2" to="/register">Register</Link>
              <Link className="text-decoration-none login-link d-block mb-2" to="/login">Login as a User</Link>
         
          </div>



          </Col>
        </Row>
      
      </Container>
      <hr/>
    </>
  );
};

export default ResetPassword;