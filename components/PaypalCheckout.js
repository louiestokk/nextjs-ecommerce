'use client'


import React,{useEffect,useState} from 'react'
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { loadScript } from "@paypal/paypal-js";

const PaypalCheckout = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  const [cartTotal, setcartTotal] = useState('100')



    const onCreateOrder = (data,actions) => {
      return actions.order.create({
          purchase_units: [
              {
                  amount: {
                      value: cartTotal,
                  },
              },
          ],
      });
  }

const onApproveOrder = (data,actions) => {
  return actions.order.capture().then((details) => {
  const name = details.payer.name.given_name;
    alert(`Transaction completed by ${name}`);
  });
}
//   const loadPaypal =async()=>{
//     let paypal
//     try {
//       paypal = await loadScript({ clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,currency: "SEK"  });
//   } catch (error) {
//       console.error("failed to load the PayPal JS SDK script", error);
//   }
  
//   if (paypal) {
//       try {
//           await paypal.Buttons().render("#paypal-container");
//       } catch (error) {
//           console.error("failed to render the PayPal Buttons", error);
//       }
//   }
//   }
//  useEffect(()=>{
// loadPaypal()
//  },[])
  return (
    <div id='paypal-container'>    
                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
    </div>
  )
}

export default PaypalCheckout




