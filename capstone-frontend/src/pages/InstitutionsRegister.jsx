import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { SET_INSTITUTION, SET_IROLE } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const institutionRegistrationHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/institutions/register", {
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
      navigate("/ilogin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container className="d-flex justify-content-center my-5 login-container">
        <Row>
          <Col xs={12} md={12}>
            <h2 className="mb-5">Registering an Institution</h2>

            <Form onSubmit={institutionRegistrationHandler}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="mb-3"
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
                  className="mb-3"
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
                  className="mb-3"
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
                  className="mb-3"
                  type="text"
                  placeholder="Type of Institution (e.g. Mosque)"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="mb-3"
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
                  className="mb-3"
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
                <Form.Control placeholder="Your address" className="mb-3" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  placeholder="Your address additional"
                  className="mb-3"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control className="mb-3" placeholder="Your City" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>State</Form.Label>
                  <Form.Control className="mb-3" placeholder="Your State" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Post Code</Form.Label>
                  <Form.Control className="mb-5" placeholder="Post Code" />
                </Form.Group>
              </Form.Row>

              <Form.Label className="mb-3">Ways of Receiving Funds</Form.Label>
              <Form.Group controlId="formBasicCheckbox mb-3">
                <Form.Check
                  className="mb-3"
                  type="checkbox"
                  label="Visa/Credit Card"
                  value={funds}
                  onChange={(e) => {
                    setFunds(e.target.value);
                  }}
                />
                <Form.Check
                  className="mb-3"
                  type="checkbox"
                  label="Cryptocurrency"
                  value={funds}
                  onChange={(e) => {
                    setFunds(e.target.value);
                  }}
                />
                <Form.Check
                  className="mb-3"
                  type="checkbox"
                  label="Hawala Banking"
                  value={funds}
                  onChange={(e) => {
                    setFunds(e.target.value);
                  }}
                />
                <Form.Check
                  className="mb-3"
                  type="checkbox"
                  label="Mobile Money"
                  value={funds}
                  onChange={(e) => {
                    setFunds(e.target.value);
                  }}
                /><Form.Check
                className="mb-3"
                type="checkbox"
                label="Remitly /Dahabshil/ Western Union/ Money Transfers"
                value={funds}
                onChange={(e) => {
                  setFunds(e.target.value);
                }}
              /><Form.Check
              className="mb-5"
              type="checkbox"
              label="Cash"
              value={funds}
              onChange={(e) => {
                setFunds(e.target.value);
              }}
            />
            
              </Form.Group>


              {/*<Form.Group controlId="ControlSelect2">
                <Form.Label>Ways of Receiving Funds</Form.Label>
                <Form.Control
                  className="mb-3"
                  as="select" multiple
                  placeholder="Cash"
                  value={funds}
                  onChange={(e) => {
                    setFunds(e.target.value);
                  }}
                  
                >
                  <option>Visa/Credit Card</option>
                  <option>Cryptocurrency</option>
                  <option>Hawala Banking</option>
                  <option>Mobile Money</option>
                  <option>PayPal</option>
                  <option>Western Union/Remitly/Dahabshil</option>
                  <option>Cash</option>
                </Form.Control>
                </Form.Group>*/}

              <Form.Label>Political Affiliation</Form.Label>
              <Form.Group controlId="formBasicCheckbox d-flex">
                <Form.Check
                  className="mb-5"
                  type="checkbox"
                  label="Are you affiliated with a political party?"
                  value={politics}
                  onChange={(e) => {
                    setPolitics(e.target.value);
                  }}
                />
            
              </Form.Group>

              <Form.Group>
                <Form.Label className="mb-3">Upload an Image</Form.Label>
                <Form.File
                  className="mb-5"
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
      <hr />
    </>
  );
};

export default InstitutionsRegister;
