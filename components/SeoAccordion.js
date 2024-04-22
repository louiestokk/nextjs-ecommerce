
import React from 'react'
import { Accordion,AccordionSummary,AccordionDetails,Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SeoAccordion = ({data,title}) => {
  return (
    <div style={{width:'100%',marginTop:'3rem'}}>
          <h2 style={{fontWeight:'bold',fontSize:'2rem',fontFamily:'Source Sans Pro, sans-serif',lineHeight:'36px',marginBottom:'1rem'}} className='populara-produkter'>{title}</h2>
    {data?.map((el,i)=>(
        <Accordion key={i}>
            <AccordionSummary  aria-controls={`panel${i}-header`}
                id={`panel${i}-header`} expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant='h6' style={{fontSize:'1rem',letterSpacing:'0.5px',fontWeight:'bold'}}>{el.title}</Typography>
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
        </Accordion>
    ))}
    </div>
  )
}

export default SeoAccordion