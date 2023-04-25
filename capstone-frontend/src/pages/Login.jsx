import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
      <h2>Sign in</h2>
      <p>Enter your registered details below</p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div class="tml-field-wrap tml-rememberme-wrap">
<input name="rememberme" type="checkbox" value="forever" id="rememberme" class="tml-checkbox"/>
<label class="tml-label" for="rememberme">Remember Me</label>
</div>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <ul class="tml-links">
        <li class="tml-register-link">
          <a href="/register">Register</a>
        </li>
        <li class="tml-lostpassword-link">
          <a href="/register">
            Forgot your password?
          </a>
        </li>
      </ul>
      </Col>
      </Row>
      </Container>
    </>
  );
};

export default Login;
