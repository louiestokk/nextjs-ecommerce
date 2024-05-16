'use client'

import React,{useState,useEffect} from 'react'
import CheckoutCartItems from '@components/CheckoutCartItems'
import {Step,Stepper,StepLabel} from '@mui/material'
import AddressForm from '@components/AddressForm'
import PaypalCheckout from '@components/PaypalCheckout'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const steps = ['Kassa', 'Leverans', 'Betalning']

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0)
   
  return (
    <div className='addressform'>
      <h2 className='kassa-title'>Kassa</h2>
      <CheckoutCartItems />
      <div style={{margin:'2rem auto'}}>
        <Stepper activeStep={activeStep}>
          {steps.map((step)=>(
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <AddressForm title={'1. Dina uppgifter'} setActiveStep={setActiveStep} activeStep={activeStep}/>
      {/* <PayPalScriptProvider options={initialOptions}>
      <PaypalCheckout />
      </PayPalScriptProvider> */}
    
     
    </div>
  )
}

export default Checkout