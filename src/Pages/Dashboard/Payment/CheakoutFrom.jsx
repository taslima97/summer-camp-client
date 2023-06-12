import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";




// eslint-disable-next-line react/prop-types
const CheakoutFrom = ({price, cart}) => {
    // console.log(price)
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
const [clientSecret, setClientSecret] = useState('');
const [processing, setProcessing] = useState(false);
const [transactionId, setTransactionId] = useState('')


useEffect(()=>{
axiosSecure.post('/create-payment-intent',{price})
.then(res=>{
    console.log(res.data.clientSecret)
    setClientSecret(res.data.clientSecret)
})
},[])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log('card', card)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error',error)
            setCardError(error.message)
        }
        else{
            setCardError('')
            // console.log('paymentMethod', paymentMethod)
        }

setProcessing(true)

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
           clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displayName || 'anonymous',
                },
              },
            },
          );
          if (confirmError) {
            // console.log(confirmError)
          }
          console.log(paymentIntent)
setProcessing(false)
          if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            const payment = {
                name: user.displayName,
                email: user?.email, 
                transactionId: paymentIntent.id,
                date: new Date(),
                price,
                status: 'service pending',
                // eslint-disable-next-line react/prop-types
                cartId: cart.map(item => item._id),
                cartImg: cart.map(item => item.image)
        }

axiosSecure.post('/payments', payment)
.then(res =>{
console.log(res.data)
if(res.data.insertedId){
    // display data
}
})


          }
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn bg-orange-500 p-2" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        {cardError && <p className="text-center text-red-500">{cardError}</p>}
        {transactionId && <p className="text-lime-600">Transaction completed</p>}
        </>
    );
};

export default CheakoutFrom;