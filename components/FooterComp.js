import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { GiOstrich } from "react-icons/gi";
import {footerlinksupport} from '../utils/pagelinks'
import { footerlinksmedlem } from '../utils/pagelinks'
import { footerlinksstore } from '../utils/pagelinks'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FaCheck } from "react-icons/fa6";
import Image from 'next/image';
const FooterComp = () => {
    let year = new Date().getFullYear()
  return (
    <footer>
    <div>
    <h2>Ditt online köpcenter med Sveriges bästa priser!</h2>
    <ul>
      <li>
        <FaCheck className='footer-check'/>
        <span>Kvalitetssäkrade produkter</span>
      </li>
      <li>
        <FaCheck className='footer-check'/>
        <span>Snabba leveranser</span>
      </li>
      <li>
        <FaCheck className='footer-check'/>
        <span>Snabb kundservice</span>
      </li>
    </ul>
    <div>
    <p style={{fontWeight:'bold',marginTop:'1.8rem',marginBottom:'0.5rem'}}>Betalnigsalternativ</p>
    <div className='betalnings-alt'>
      <img src='/assets/images/visa.jpg' alt='visa logo' className='payment-logo' />
      <img src='/assets/images/mastercard.jpg' alt='mastercard logo' className='payment-logo' />
      <img src='/assets/images/logo_paypal.jpg' alt='paypal logo' className='payment-logo' />
      <img src='/assets/images/applepay.jpg' alt='paypal logo' className='payment-logo' style={{width:'110px'}}/>
    </div>
    <div>
    <p style={{fontWeight:'bold',marginTop:'1.8rem',marginBottom:'0.5rem'}}>Trygg e-handel</p>
    <img src='/assets/images/trygg-ehandel.jpg' alt='visa logo' className='payment-logo' style={{marginBottom:'1.4rem'}}/>
    </div>
  
        {footerlinksupport.map((el,i)=>(
            <Accordion key={i} className='accordion'>
            <AccordionSummary
                expandIcon={<AddIcon className='addicon'/>}
                aria-controls={`panel${i}-header`}
                id={`panel${i}-header`}
              >
                <Typography variant="h6" fontSize={16}>
                  {el.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text2}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text3}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text4}
                </Typography>
              </AccordionDetails>
            </Accordion>
        ))}
    </div>
    <div>
        {footerlinksmedlem.map((el,i)=>(
            <Accordion key={i} className='accordion'>
            <AccordionSummary
                expandIcon={<AddIcon className='addicon' />}
                aria-controls={`panel${i}-header`}
                id={`panel${i}-header`}
              >
                <Typography variant="h6" fontSize={16}>
                  {el.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text2}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text3}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text4}
                </Typography>
              </AccordionDetails>
            </Accordion>
        ))}
    </div>
    <div>
        {footerlinksstore.map((el,i)=>(
            <Accordion key={i} className='accordion'>
            <AccordionSummary
                expandIcon={<AddIcon className='addicon'/>}
                aria-controls={`panel${i}-header`}
                id={`panel${i}-header`}
              >
                <Typography variant="h6" fontSize={16} style={{display:'flex',alignItems:'center'}}>
                  {el.title} {el.icon}
                </Typography>
             
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text2}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text3}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text4}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text5}
                </Typography>
                
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text6}
                </Typography>
                
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {el.text7}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
        ))}
    </div>
    <div className='icons-container'>
<XIcon className='footer-icons'/>
<FacebookIcon className='footer-icons'/>
<TelegramIcon className='footer-icons'/>
    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
    <p className='text-xs'>Copyright <span>&copy;</span> {year} .struts </p>
    <GiOstrich/>
    </div>
    </div>
  
 
    </footer>
  )
}

export default FooterComp