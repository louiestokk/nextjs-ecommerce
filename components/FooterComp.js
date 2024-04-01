import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import {footerlinksupport} from '../utils/pagelinks'
import { footerlinksmedlem } from '../utils/pagelinks'
import { footerlinksstore } from '../utils/pagelinks'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import Image from 'next/image';
const FooterComp = () => {
    let year = new Date().getFullYear()
  return (
    <footer>
    <div>
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
    <div className='icons-container'>
<XIcon className='footer-icons'/>
<FacebookIcon className='footer-icons'/>
<TelegramIcon className='footer-icons'/>
    </div>
    <p className='text-xs'>Copyright <span>&copy;</span> {year} Smyckes Butiken</p>
    </footer>
  )
}

export default FooterComp