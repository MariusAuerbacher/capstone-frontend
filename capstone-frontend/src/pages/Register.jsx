import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { SET_ROLE, SET_USER } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../css/Register.css"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
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
      navigate("/login")
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const registerInstitutionHandler=()=> {
    navigate("/iregister")
  }

  return (
    <>
      <Container id="register" className="my-5 register-body">
        <Row>
          <Col xs={12} md={7} className="mt-5">
            <h2>Create a Donator Account</h2>
            <p>Create an account today. Simply fill in the form below and start donating</p>

            <Form onSubmit={userRegistrationHandler}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                 className="mb-2"
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
                  className="mb-2"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                 className="mb-3"
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

              Send me emails and updates
              </label>
              <button
                name="submit"
                type="submit"
                className="btn btn-primary btn-block btn-xl register-button mb-2"
              >
                Register
              </button>
            </Form>

            <div className="tml-links mb-5">
              
                <Link className="text-decoration-none register-link d-block mb-2" to="/login">Log in</Link>
                <Link className="text-decoration-none register-link d-block mb-2" to="/ilogin">Log in as an Institution</Link>
            
                <Link className="text-decoration-none register-link" to="/login">Lost your password?</Link>
           
            </div>
          </Col>





          <Col xs={12} md={4} className="mt-5"> 
            <h2>Register an Institution</h2>
            <h6 className="institution-registration-text mt-4">If you would like to register an Institution and be part of Ummati to help needy people directly click <button onClick={registerInstitutionHandler} className="button-as-anchorTag">here</button> and start helping others today!</h6>
            <button className="btn btn-primary btn-block btn-xl register-button mt-4" onClick={registerInstitutionHandler}>Join us today</button>

          
          </Col>
        </Row>

    
       
    
      </Container>
      <hr/>
    </>
  );
};

export default Register;
