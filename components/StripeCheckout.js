'use client'

import React,{useEffect,useState} from 'react'
import { Elements,useStripe,useElements,PaymentElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Button } from '@mui/material'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

const Form = ()=>{
  const stripe = useStripe()
  const elements = useElements()

  return <div style={{padding:'1rem'}}>
<PaymentElement />
<Button variant='contained' style={{background:'#FB6D48',color:'white',width:'100%',marginTop:'0.75rem'}}>LÄGG BESTÄLLNING</Button>
  </div>
}

const StripeCheckout = ({clientSecret}) => {
  return (
    <Elements options={{clientSecret}} stripe={stripePromise}>
      <Form />
    </Elements>
  )
}

export default StripeCheckout