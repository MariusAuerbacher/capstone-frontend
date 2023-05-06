import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/Payment.css"

const PaymentSuccess = () => {
 return (
  <>
   <Container className="text-center mt-5 payment-success-container">
        <Row>
          <Col xs={12} md={12}>
          <h1>Thank you for your donation</h1>
          <p>You will shortly receive an email and a message confirming your donation</p>
         
          </Col>
          </Row>
          </Container>

  
  </>
 )
};

export default PaymentSuccess;