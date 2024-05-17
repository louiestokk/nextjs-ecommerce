
import React from 'react'
import Stripe from 'stripe'
import StripeCheckout from '../../components/StripeCheckout'
import {Step,Stepper,StepLabel} from '@mui/material'
import CheckoutCartItems from '@components/CheckoutCartItems'
const stripe = new Stripe('sk_test_51PEbGPJvlojyjdfOU5dehYvc6CaNWMfXGZwQgJ66uVfXkuqJgXaLzv5DimmOQ651NqHLEZlYoCBoBjQUXs5wTPKG00aANUQe4T')
const steps = ['Kassa', 'Leverans', 'Betalning']
const BetalningCheckout = async() => {

   const paymentIntent = await stripe.paymentIntents.create({
        amount:3.00*100,
        currency:'sek',
        metadata:{productId:'101'}
    })
    if(paymentIntent.client_secret==null){
      throw new Error('Stripe failed to create payment intent')
    }
  return (
    <div>
    <div style={{margin:'1rem auto',padding:'0.5rem'}}>
        <Stepper activeStep={2}>
          {steps.map((step)=>(
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div style={{display:'flex',justifyContent:'center',marginBottom:'1.5rem'}}>

    <CheckoutCartItems />
      </div>
 <StripeCheckout clientSecret={paymentIntent.client_secret} />
  
    </div>
  )
}

export default BetalningCheckout