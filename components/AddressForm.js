'use client'

import React,{useState} from 'react'
import {TextField,Button} from '@mui/material'
import DeliveryOptions from './DeliveryOptions'
const AddressForm = ({title}) => {
  const [formIsValid, setformIsValid] = useState(false)
  return (
    <div className='addressform' style={{margin:'1rem auto'}}>
        <h2>{title}</h2>
        <form className='addressform'>
            <TextField required id="outlined-basic" label="För och Efternamn" variant="outlined" className='addressform-textfield'/>
            <TextField
            className='addressform-textfield'
            required
 type='email'
 id="standard-error-helper-text"
 label="E-mail"
 helperText="För kvitto och orderbekräftelse."
 variant="outlined"
/>
            <TextField  id="outlined-basic" label="Telefonnummer" variant="outlined" helperText='För aviseringar. Ange ett svneskt nummer som börjar på 07 eller +46(07XXXXXXXX)' className='addressform-textfield'/>
          <DeliveryOptions />

            <Button disabled={!formIsValid} variant='outlined' type='button' style={{padding:'0.75rem',width:'96%'}}>Spara & fortsätt till leverans</Button>
        </form>
    </div>
  )
}

export default AddressForm