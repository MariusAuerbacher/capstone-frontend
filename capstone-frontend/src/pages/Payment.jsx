import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";


const stripePromise = loadStripe(
  "pk_test_51N2vqiE6c8bqw4729gojh9WjC6LXAP0PObk8l19UaST5Vli2yNTpipObPaPN9fW7BSg5NcbwURRcvg4Rv59KGb1C00hMyDUUV3"
);

const Payment = () => {
  const [price, setPrice] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const getClientSecret = async (e) => {
    e.preventDefault();
    const res = await axios.post("/payments/payment-intent", { price: +price });
    console.log(res.data);
    setClientSecret(res.data.clientSecret);
  };

  return (
    <>
      <Form onSubmit={getClientSecret}>
        <FormControl
          type="text"
          placeholder="Enter Amount"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Button type="submit">Pay now</Button>
      </Form>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{clientSecret}}>
         <CheckoutForm price={price} />
        </Elements>
      )}
        <hr/>
    </>
  );
};

export default Payment;
