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




