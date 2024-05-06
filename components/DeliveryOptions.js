'use client'

import { TextField } from '@mui/material';
import React,{useState,useRef,useEffect} from 'react'
import { BiSearch } from "react-icons/bi";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
let autocomplete

const DeliveryOptions = () => {

  const initAutocomplete = ()=>{
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      {
        types:['establishment'],
        componentRestrictions:{'country':['SE']},
        fields:['place_id','geometry','name']
      }
    )
    autocomplete.addListener('place_changed',handleAddressChange)
  }
  
  const handleAddressChange = ()=>{
   let place = autocomplete?.getPlace()
   if(!place?.geometry){
    document.getElementById('autocomplete').placeholder = 'Sök adress'
   }else{
    document.getElementById('details').innerHTML = place.name
   }
  }
useEffect(()=>{
initAutocomplete()
},[])
  return (
    <div style={{display:'flex',alignItems:'center',border:'0.5px solid gray',width:'96%',borderRadius:'5px',padding:'0.9rem',margin:'0.5rem',color:'#3B3B3B'}}>
    <BiSearch style={{color:'gray',marginRight:'0.2rem'}}/>
    <input onChange={handleAddressChange} id='autocomplete' placeholder='Skriv in adress för leverans' type='text'/>
    <LocalShippingIcon style={{color:'gray'}}/>
    </div>

  )
}

export default DeliveryOptions