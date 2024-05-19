'use client'

import React,{useEffect,useState} from 'react'
import { Elements,useStripe,useElements,PaymentElement,LinkAuthenticationElement,userOrderExits } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

const Form = ({cart})=>{
  const stripe = useStripe()
  const elements = useElements()
const [isLoading, setIsLoading] = useState(false)
const [errorMessage, setErrorMessage] = useState(null)
const [email, setEmail] = useState(null)

  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(stripe==null || elements == null) return
    setIsLoading(true)

    const orderExists = await userOrderExits(email,cart?.line_items?.map((el)=> el?.id))
    if(orderExists){
      setErrorMessage('Du har redan köpt den här varan! Logga in och besök din ordersida')
      setIsLoading(false)
      return
    }
    // check for existing order


    stripe
    .confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/betalning-genomford`,
      },
    })
    .then(({ error }) => {
      if (error.type === "card_error" || error.type === "validation_error") {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("An unknown error occurred")
      }
    })
    .finally(() => setIsLoading(false))

  }



  return <div style={{padding:'1rem'}}>
  <h1 style={{marginBottom:'0.5rem',fontWeight:'bold'}}>CHECKOUT</h1>
  {errorMessage && <p style={{marginBottom:'0.5rem'}}>{errorMessage}</p>}
  <form>
  <PaymentElement />
  <LinkAuthenticationElement onChange={(e)=>setEmail(e.value.email)}/>
<Button type='button' disabled={stripe==null||elements==null || isLoading} variant='contained' style={{background:'#FB6D48',color:'white',width:'100%',marginTop:'0.75rem',letterSpacing:'1px'}} onClick={handleSubmit}>
  {isLoading ? 'Betalning behandlas...':`BETALA ${cart?.subtotal?.raw} KR`}
</Button>
  </form>

  </div>
}


const StripeCheckout = ({clientSecret}) => {
const {payload} = useSelector((state)=> state.cart.userCart)
  return (
    <Elements options={{clientSecret}} stripe={stripePromise} >
      <Form cart={payload}/>
    </Elements>
  )
}

export default StripeCheckout