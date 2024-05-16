import React from 'react'
import Stripe from 'stripe'
import StripeCheckout from '../../components/StripeCheckout'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

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
    <h1>Betalning Checkout</h1>
    <StripeCheckout clientSecret={paymentIntent.client_secret} cartItems={'passa in alla cart items'}/>
    </div>
  )
}

export default BetalningCheckout