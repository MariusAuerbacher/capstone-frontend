import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";



const Register = () => {
  //const [name, setName] = useState()
  //const [email, setEmail] = useState()
  //const [password, setPassword] = useState()

  const registrationHandler = async() => {
    //const res = await axios.post("/users/register", {
      //name, email, password
    //})
    //console.log(res.data)
  }

  return (
    <>
    <Container>
        <Row>
          <Col xs={12} md={6}>
     <h2>Create an Account</h2>
      <p>Create an account today. Simply fill in the form below</p>


      <Form  onSubmit={registrationHandler}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" value="" /* onChange={(e) => {
                  setSearchWord(e.target.value.toLowerCase());
                }}*/ />
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@gmail.com" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Your password" />
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
          class="tml-checkbox"
        ></input>
        <button
          name="submit"
          type="submit"
          class="btn btn-primary btn-block btn-xl"
        >
          Register
        </button>
      </Form>

      <ul class="tml-links">
        <li class="tml-login-link">
          <a href="/login">Log in</a>
        </li>
        <li class="tml-lostpassword-link">
          <a href="/login">Lost your password?</a>
        </li>
      </ul>
      </Col>
      </Row>
      </Container>
    </>
  );
};

export default Register;
