
import React from 'react'
import CheckoutCartItems from '@components/CheckoutCartItems'
import {Step,Stepper,StepLabel} from '@mui/material'
import AddressForm from '@components/AddressForm'

const steps = ['Kassa', 'Leverans', 'Betalning']

const Checkout = () => {   
  return (
    <div className='addressform'>
      <h2 className='kassa-title'>Kassa</h2>
      <CheckoutCartItems />
      <div style={{margin:'2rem auto'}}>
        <Stepper activeStep={0}>
          {steps.map((step)=>(
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <AddressForm title={'1. Dina uppgifter'} />  
    </div>
  )
}

export default Checkout