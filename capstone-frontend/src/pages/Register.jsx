import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";



const Register = () => {
  const [name, setName] = useState({
   name: ""
  })
  const [email, setEmail] = useState({
    email: ""
  })
  const [password, setPassword] = useState({
    password: ""
  })



  const registrationHandler = async(e) => {
    e.preventDefault()
    const res = await axios.post("/users/register", {
   name, email, password
    })
    .then(res => console.log(res.data))
    console.log("++++++++++++++", res.data)
  }




  return (
    <>
    <Container>
        <Row>
          <Col xs={12} md={6}>
     <h2>Create an Account</h2>
      <p>Create an account today. Simply fill in the form below</p>


      <Form  onSubmit={registrationHandler}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" name="name" value={name.name} onChange={(e)=> {
            setName({
              ...name,
              name: e.target.value
            })
          }} />
        </Form.Group>


        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@gmail.com" value={email.email} onChange={(e)=> {
            setEmail({
              ...email,
              email: e.target.value
            })
          }}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Your password" value={password.password} onChange={(e)=> {
            setPassword({
              ...password,
              password: e.target.value
            })
          }} />
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
          <a href="/login">Log in</a>
        </li>
        <li className="tml-lostpassword-link">
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
