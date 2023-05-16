import {PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import "../css/CheckoutForm.css"



const CheckoutForm = ({price}) => {

  const stripe = useStripe();
  const elements = useElements();
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  
  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }

    const result = await stripe.confirmPayment({
     
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success",
      },
      redirect: "if_required"
    });
    
    if (result.error) {
      
      console.log(result.error);
    } else {

      const res = await axios.post("/payments/", {
        price: +price,
        beneficiary: searchParams.get("beneficiary"),
        institution: searchParams.get("institution"),

      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      console.log(res.data)
      navigate("/payment-success")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" className="mb-5 mt-3 checkout-pay-button">Pay Now</button>
    </form>
  );
};

export default CheckoutForm;