import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/Payment.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const role = useSelector((state)=>state.userReducer.role)
  const navigate = useNavigate()
  useEffect(()=>{
    if(role !== "DONATOR"){
      navigate("/login", {replace: true})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])
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