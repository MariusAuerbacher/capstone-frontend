import axios from "axios";
import React, { useState } from "react";
import {  Col, Container, Form, Row } from "react-bootstrap";
import { SET_INSTITUTION, SET_IROLE } from "../redux/actions";
import { useDispatch } from "react-redux";

const InstitutionsRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [funds, setFunds] = useState("");
  const [politics, setPolitics] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const institutionRegistrationHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/institutions/iregister", {
        name,
        email,
        password,
        type,
        description,
        phone,
        funds,
        politics,
        image,
      });
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: SET_INSTITUTION,
        payload: res.data.institution,
      });
      dispatch({
        type: SET_IROLE,
        payload: res.data.role,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h2>Registering an Institution</h2>
            <p>
              If you would like to register an Institution to help needy people
              in your community click <a href="/institutions">here</a>
            </p>

            <Form onSubmit={institutionRegistrationHandler}>
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

              <Form.Group>
                <Form.Label>Type of Institution</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type of Institution"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Please describe your institution"
                  rows={3}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Form.Group>



              <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>



              <Form.Group controlId="ControlSelect2">
                <Form.Label>Ways of Receiving Funds</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="How can you receive funds?"
                  value={funds}
                  onChange={(e) => {
                    setFunds(e.target.value);
                  }}
                  multiple
                >
                  <option>Visa/Credit Cards</option>
                  <option>PayPal</option>
                  <option>Western Union/Remitly</option>
                  <option>Cryptocurrency</option>
                  <option>Mobile Money</option>
                </Form.Control>
              </Form.Group>

              
              <Form.Label>Political Affiliation</Form.Label>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Are you affiliated with a political party?"
                  value={politics}
                  onChange={(e) => {
                    setPolitics(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Upload an Image</Form.Label>
                <Form.File
                  id="ControlFile1"
                  label="Please upload an image of your institution"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </Form.Group>

              {/*<Form.Group controlId="exampleForm.ControlInput4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm your password" />
          </Form.Group>
              <input
                name="terms"
                type="checkbox"
                value="1"
                id="terms"
                className="tml-checkbox"
              ></input>*/}
              <button
                name="submit"
                type="submit"
                className="btn btn-primary btn-block btn-xl"
              >
                Register
              </button>
            </Form>

            {/*<ul className="tml-links">
              <li className="tml-login-link">
                <a href="/login">Log in</a>
              </li>
              <li className="tml-lostpassword-link">
                <a href="/login">Lost your password?</a>
              </li>
            </ul>*/}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InstitutionsRegister;
