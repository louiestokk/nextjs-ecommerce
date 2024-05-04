'use client'

import { TextField } from '@mui/material';
import React,{useState,useRef} from 'react'
import { BiSearch } from "react-icons/bi";
import EditLocationIcon from '@mui/icons-material/EditLocation';
const DeliveryOptions = () => {
  const center = { lat: 50.064192, lng: -130.605469 };
  // Create a bounding box with sides ~10km away from the center point
  const defaultBounds = {
    north: center.lat + 0.1,
    south: center.lat - 0.1,
    east: center.lng + 0.1,
    west: center.lng - 0.1,
  };
  const input = document.querySelector(".pac-input");
  const options = {
    bounds: defaultBounds,
    componentRestrictions: { country: "se" },
    fields: ["address_components", "geometry", "icon", "name"],
    strictBounds: false,
  };
  
  const handleAddressChange = ()=>{
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(["place_id", "geometry", "name"]);
  }

  return (
    <div style={{display:'flex',alignItems:'center',border:'0.5px solid gray',width:'96%',borderRadius:'5px',padding:'0.9rem',margin:'0.5rem',color:'#3B3B3B'}}>
    <BiSearch style={{color:'gray',marginRight:'0.2rem'}}/>
    <input onChange={handleAddressChange} className='pac-input' placeholder='Sök adress' />
    <EditLocationIcon style={{color:'green'}}/>
    </div>

  )
}

export default DeliveryOptions