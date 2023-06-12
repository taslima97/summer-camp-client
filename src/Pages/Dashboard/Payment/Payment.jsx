import { loadStripe } from "@stripe/stripe-js";
// import { useParams } from "react-router-dom";
import CheakoutFrom from "./CheakoutFrom";
import { Elements } from "@stripe/react-stripe-js";
// import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway);
const Payment = () => {
    // const {_id} = useParams();
    // console.log(_id)
   const price = localStorage.getItem('price')
   const image = localStorage.getItem('image')
  
// console.log(price)
    return (
        <div className="w-2/4 ">
           <h2 className="text-3xl">Payment here</h2>
           <Elements stripe={stripePromise}>
            <CheakoutFrom price={price} image={image}></CheakoutFrom> 
           </Elements>
        </div>
    );
};

export default Payment;