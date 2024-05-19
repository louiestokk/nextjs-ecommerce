'use client'

import React,{useEffect, useState} from 'react'
import {TextField,Button} from '@mui/material'
import { Oval } from 'react-loader-spinner'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';

const AddressForm = ({title}) => {
  const [activeStep, setActiveStep] = useState(0)
  const  router = useRouter()
  const [formIsValid, setformIsValid] = useState(false)
  const [errors, setErrors] = useState({}); 
  const [servicePoints, setservicePoints] = useState(false)
  const [choosenServicePoint, setchoosenServicePoint] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [formData, setFormData] = useState({
    name:null,
    email:null,
    telefon:null,
    adress:null,
    postnummer:null,
    city:null
  })

  
const scrollToElement = ()=>{
  setTimeout(()=>{
    document.querySelector('.leverans-postombud-title-last').scrollIntoView({behavior:'smooth'})
  },1500)

}

const fetchPostNord =async()=>{
  try {
    setFetching(true)
    const serviceStallen = await fetch(`https://atapi2.postnord.com/rest/businesslocation/v5/servicepoints/nearest/byaddress?returnType=json&countryCode=SE&agreementCountry=SE&customerKey=${formData.city}&city=Sweden&postalCode=${formData.postnummer}&streetName=${formData.adress}&streetNumber=9A&numberOfServicePoints=5&srId=EPSG%3A4326&context=optionalservicepoint&responseFilter=public&typeId=24%2C25%2C54&located=all&whiteLabelName=false&apikey=a4eba0f6c6ed11af425fc375ca03bc74`)
    
    const {servicePointInformationResponse} = await serviceStallen.json()
    setservicePoints(servicePointInformationResponse.servicePoints)
    setFetching(false)
  } catch (error) {
    console.log(error)
  }
}

  const handleFormChange = (e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm()
  }

  const validateForm = () => { 
    let errors = {}; 
    if (!formData.name) { 
        errors.name = 'Name is required.'; 
    } 

    if (!formData.email) { 
        errors.email = 'Email is required.'; 
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) { 
        errors.email = 'Email is invalid.'; 
    } 

    if (!formData.telefon) { 
        errors.telefon = 'PhoneNumber is required.'; 
    } else if (formData.telefon.length < 9) { 
        errors.telefon = 'Phonenumber must be at least 10 characters.'; 
    } 
    if(!formData.adress){
      errors.adress = 'Skriv in adress för leverans'
    }else if(formData.adress.length <10){
      errors.adress = 'Skriv in Gata, Postnummer, Ort'
    }
    if(!formData.postnummer){
      errors.postnummer = 'Ange ett postnummer'
    }
    if(!formData.city){
      errors.city = 'Ange stad/ort'
    }

    setErrors(errors); 
    setformIsValid(Object.keys(errors).length === 0); 
}; 

 
  return (
    <div className='addressform' style={{margin:'1rem auto'}}>
        <h2 style={{width:'100%',marginLeft:'1rem',fontSize:'1.1rem',marginBottom:'1rem'}}>{title}</h2>
        <form className='addressform'>
            <TextField required id="outlined-basic" label="För och Efternamn" variant="outlined" className='addressform-textfield' name='name' onChange={handleFormChange}/>
            <TextField
            className='addressform-textfield'
            required
            name='email'
 type='email'
 id="standard-error-helper-text"
 label="E-mail"
 helperText="För kvitto och orderbekräftelse."
 variant="outlined"
 onChange={handleFormChange}
/>
            <TextField name='telefon'  id="outlined-basic" label="Telefonnummer" variant="outlined" helperText='För aviseringar. Ange ett svenskt nummer som börjar på 07 eller +46(07XXXXXXXX)' className='addressform-textfield' onChange={handleFormChange}/>
            <TextField name='adress'  id="outlined-basic" label="Adress" variant="outlined" className='addressform-textfield' onChange={handleFormChange}/>
            <div style={{display:'flex',width:'96%'}}>
            <TextField name='postnummer'  id="outlined-basic" label="Postnnummer" variant="outlined" className='addressform-textfield' onChange={handleFormChange}/>
            <TextField name='city'  id="outlined-basic" label="Ort" variant="outlined" className='addressform-textfield' onChange={handleFormChange}/>
            </div>
           
            <Button disabled={!formIsValid} variant='outlined' type='button' style={{padding:'0.75rem',width:'96%',marginTop:'0.5rem'}} onClick={(e)=>{
              e.preventDefault()
              validateForm()
             fetchPostNord()
              {formIsValid && setActiveStep(1)}
              scrollToElement()
            }}>Spara & fortsätt till leverans</Button>
        </form>
            {fetching && <div style={{marginTop:'2rem'}}> <Oval
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
/></div> }

{servicePoints && <div style={{width:'100%',marginTop:'2rem'}}>
<h2 style={{marginLeft:'1rem',marginTop:'1rem',fontSize:'1.1rem'}} className='leverans-postombud-title-last'>2. Leverans Postnord</h2>
<div style={{width:'100%', display:'flex',alignItems:'center',overflowX:'scroll'}}>
{servicePoints.map((el,i)=>(
    <div key={i} style={{padding:'1rem'}}>
    <h5 style={{fontWeight:'bold',marginBottom:'0.1rem',width:'140px',fontSize:'0.9rem'}}>{el?.name}</h5>
    <p style={{fontSize:'0.9rem'}}>{el?.deliveryAddress?.streetName} {el?.deliveryAddress?.streetNumber}</p>
    <p style={{fontSize:'0.8rem'}}>{el?.deliveryAddress?.postalCode}</p>
    <p style={{fontSize:'0.8rem'}}>{el?.deliveryAddress?.city}</p>
    <div style={{display:'flex',alignItems:'center',marginTop:'1rem',marginBottom:'0.3rem'}}>
      <p style={{fontSize:'0.7rem',fontWeight:'bold'}}>Öppetider</p>
      <button style={{marginLeft:'1rem'}}>
        <ExpandMoreIcon style={{fontSize:'1.1rem'}}/>
      </button>
    </div>
    <button style={{background:'#FB6D48',color:'white',fontSize:'0.6rem',padding:'0.3rem 0.5rem',width:'140px',boxShadow:'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}} onClick={()=>setchoosenServicePoint(el)}>VÄLJ POSTOMBUD</button>
    </div>
  ))}
</div>
</div>}
  {choosenServicePoint && <div style={{display:'flex',alignItems:'center',marginTop:'1rem'}}>
  <div style={{marginRight:'1rem',height:'150px'}}>
  <h2 style={{fontWeight:'bold',fontSize:'0.8rem'}}>PAKETET SKICKAS TILL</h2>
  <p style={{fontSize:'0.8rem'}}>{choosenServicePoint?.name}</p>
  <p style={{fontSize:'0.8rem'}}>{choosenServicePoint?.deliveryAddress?.streetName} {choosenServicePoint?.deliveryAddress?.streetNumber}</p>
  <p style={{fontSize:'0.8rem'}}>{choosenServicePoint?.deliveryAddress?.postalCode}</p>
    <p style={{fontSize:'0.8rem'}}>{choosenServicePoint?.deliveryAddress?.city}</p>
  </div>
<div style={{height:'150px'}}>
  <h2 style={{fontWeight:'bold',fontSize:'0.8rem'}}>DINA UPPGIFTER</h2>
  <p style={{fontSize:'0.8rem'}}>{formData.name}</p>
  <p style={{fontSize:'0.8rem'}}>{formData.adress}</p>
  <div style={{display:'flex',alignItems:'center'}}>
  <p style={{fontSize:'0.8rem',marginRight:'0.2rem'}}>{formData.postnummer}</p>
  <p style={{fontSize:'0.8rem'}}>{formData.city}</p>
  </div>
  <p style={{fontSize:'0.8rem'}}>{formData.email}</p>
  <p style={{fontSize:'0.8rem'}}>{formData.telefon}</p>
 
</div>

  </div>}
  {choosenServicePoint && <button style={{background:'#00AB66',color:'white',fontSize:'0.8rem',padding:'0.5rem 0.5rem',width:'90%',boxShadow:'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',fontWeight:'bold'}} onClick={()=>{
    setActiveStep(2)
   router.push('/betalning-checkout')
  }}>FORTSÄTT TILL BETALNING</button>}
  


    </div>
  )
}

export default AddressForm