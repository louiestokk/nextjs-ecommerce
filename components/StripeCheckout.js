'use client'

import React,{useEffect,useState} from 'react'
import { Elements,useStripe,useElements,PaymentElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

const Form = ()=>{
  const stripe = useStripe()
  const elements = useElements()
  return <PaymentElement />
}

const StripeCheckout = ({clientSecret,cartItems}) => {
  return (
    <Elements options={{clientSecret}} stripe={stripePromise}>
      <Form />
    </Elements>
  )
}

export default StripeCheckout