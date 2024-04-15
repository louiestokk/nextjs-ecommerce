import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductDetailsAccordion = ({product}) => {
  return (
    <div>  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography variant='subtitle2'>BESKRIVNING</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography variant='p' dangerouslySetInnerHTML={{__html:product?.description}} style={{fontSize:'0.8rem',padding:'0.25rem',fontWeight:'bold'}}>
       
      </Typography>
      <Typography variant='subtitle1' style={{fontSize:'0.8rem'}}>
      Struts - ditt online köpcenter för smycken och accessoarer till oslagbara priser och snabba leveranser! Upptäck vårt breda sortiment av smycken för herr, kvinna och barn, inklusive halsband, armband, örhängen, ringar och mycket mer i moderna, vintage och punk-stilar. Vi erbjuder även solglasögon och hårtillbehör som hårsnoddar och scrunchies. Utforska våra kategorier idag och hitta det perfekta tillbehöret för din stil. Välkommen till Struts!
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography>INNEHÅLL</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion></div>
  )
}

export default ProductDetailsAccordion