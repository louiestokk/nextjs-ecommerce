import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Popular = () => {
  return (
    <Box sx={{ width: '100%',padding:'0.75rem' }}>
             <h2 style={{fontWeight:'bold',fontSize:'2.4rem'}} className='populara-produkter'> Populära kategorier</h2>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
     <img loading='lazy' src='/assets/images/armband-cat.png' alt='armband' className='popular-cat-img' />
      </Grid>
      <Grid item xs={6}>
      <img loading='lazy' src='/assets/images/piercing-cat.png' alt='piercingar' className='popular-cat-img'/>
      </Grid>
      <Grid item xs={6}>
      <img loading='lazy' src='/assets/images/harband-cat.png' alt='hårband och hårsnoddar' className='popular-cat-img'/>
      </Grid>
      <Grid item xs={6}>
      <img loading='lazy' src='/assets/images/halsband-cat.png' alt='halsband' className='popular-cat-img'/>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Popular