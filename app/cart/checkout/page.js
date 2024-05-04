'use client'

import React,{useState} from 'react'
import CheckoutCartItems from '@components/CheckoutCartItems'
import {Step,Stepper,StepLabel} from '@mui/material'
import AddressForm from '@components/AddressForm'

const steps = ['Kassa', 'Leverans', 'Betalning']

const Checkout = () => {
  const [activeStep, setactiveStep] = useState(0)
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
      <AddressForm title={'1. Dina uppgifter'}/>
    </div>
  )
}

export default Checkout