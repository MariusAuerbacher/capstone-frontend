import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import "../css/Payment.css"
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";


const stripePromise = loadStripe(
  "pk_test_51N2vqiE6c8bqw4729gojh9WjC6LXAP0PObk8l19UaST5Vli2yNTpipObPaPN9fW7BSg5NcbwURRcvg4Rv59KGb1C00hMyDUUV3"
);

const Payment = () => {
  const navigate = useNavigate()
  const role = useSelector((state)=>state.userReducer.role)
  const [price, setPrice] = useState("");
  //const [funds, setFunds] = useState("")
  const [clientSecret, setClientSecret] = useState(null);
  const [searchParams] = useSearchParams()
  const getClientSecret = async (e) => {
    e.preventDefault();
    const res = await axios.post("/payments/payment-intent", { price: +price });
    setClientSecret(res.data.clientSecret);
  };
useEffect(()=>{
  const amount = searchParams.get("amount")
  setPrice(amount)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchParams.get("amount")])

useEffect(()=>{
  if(role !== "DONATOR"){
    navigate("/login", {replace: true})
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [role])
  return (
    <>
    <Container id="#login" className="d-flex justify-content-center my-5 login-container">
        <Row>
          <Col xs={12} md={12}>
            <h5 className="my-5">Please Enter the Amount you would like to donate</h5>
      <Form onSubmit={getClientSecret}>
        <FormControl
          type="text"
          placeholder="Enter Amount"
          className="mb-4"
          value={price} 
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Button type="submit" className="mb-5 pay-now-button">Donate</Button>
      </Form>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{clientSecret}}>
         <CheckoutForm price={price} />
        </Elements>
      )}
    
    <Form.Label className="mb-3">Would you like to add 1$ to your donation to help run this website?</Form.Label>
              <Form.Group controlId="formBasicCheckbox mb-3">
                <Form.Check
                  className="mb-3"
                  type="checkbox"
                  label="Yes, donate 1$ to run this website"
                  onChange={(e) => {

                   
                    if(e.target.checked === true){
                      setPrice((Number(price) + 1).toString())
                    } else {
                      setPrice((Number(price) - 1).toString())
                    }

                  }}
                />
                </Form.Group>
   
        </Col>
        </Row>
        </Container>
    </>
  );
};

export default Payment;
