import React from "react";
import {Col, Container, Row } from "react-bootstrap";

import "../css/Login.css"




const PageUnderConstruction = () => {

  return (
    <>
      <Container id="#PageUnderConstruction" className="d-flex justify-content-center my-5 login-container">
        <Row>
          <Col xs={12} md={12}>
            <h2 className="mb-4">This Page is still under construction</h2>
            <p className="mb-4">We apologize, the page you have tried to access is still under construction, <br/> we hope that this issue will be fixed soon.<br/> Thank you for your patience</p>
           


          </Col>
        </Row>
      
      </Container>
      <hr/>
    </>
  );
};

export default PageUnderConstruction;