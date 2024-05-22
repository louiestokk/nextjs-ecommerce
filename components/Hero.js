import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Image from 'next/image';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const boxes = [
  {
    background:'#FFAF45',
    path:'/assets/images/ringar.png',
    alt:'ringar'
  },
  {
    background:'#D74B76',
    path:'/assets/images/energi-armband.png',
    alt:'armband'
  },
  {
    background:'#673F69'
  },
  {
    background:'#FB6D48'
  }
]
const Hero = () => {
  return (
    <div className='hero-container' style={{margin:'0 auto'}}>
    <img loading='lazy' src='/assets/images/everything.png' alt='rea smycken' className='hero-main-img'/>
    <div style={{display:'flex',flexDirection:'row',width:'100%',marginTop:'0.4rem'}}>
      <img loading='lazy' src='/assets/images/orhangen.png' alt='örhängen rea' className='hero-banner-img' />
      <img loading='lazy' src='/assets/images/ringar.png' alt='ringar rea' className='hero-banner-img' />
    </div>
    </div>
  )
}

export default Hero

{/* <Box sx={{ width: '100%' }} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      {boxes.map((el,i)=>(
        <Grid item xs={6} key={i} style={{padding:'0'}}>
          <Item style={{background:el.background, height:'200px',margin:'0.25rem 0.25rem'}}>
            <Image src={el.path} alt={el.alt} width={200} height={200}/>
          </Item>
        </Grid>
      ))}

      </Grid>
    </Box> */}