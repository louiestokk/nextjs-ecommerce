'use client'

import React,{useEffect, useState} from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import { Button,Box,Grid} from '@mui/material';
import ProductCard from './ProductCard';
import { Oval } from 'react-loader-spinner';
const CategoryPageProducts = ({slug}) => {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)

const fetchSunGlasses = async()=>{
  try {
    setLoading(true)
    const resp = await fetch(slug)
    const {data} = await resp.json()
   setProducts(data)
   setLoading(false)
  } catch (error) {
    console.log(error)
  }
}


  useEffect(()=>{
    fetchSunGlasses()
  },[])
  return (
    <div style={{width:'100%',height:'100%'}}>

<div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',marginBottom:'1.2rem'}}>
  <Button type='button' variant='outlined' style={{color:'black',border:'1px #d6d6d6 solid',padding:'0.5rem',fontSize:'0.8rem',fontWeight:'bold',width:'10rem'}}>
    <FilterListIcon />
    <p style={{marginLeft:'0.25rem'}}>Filtrera</p>
  </Button>
  <Button variant='outlined' type='button' style={{color:'black',border:'1px #d6d6d6 solid',padding:'0.5rem',fontSize:'0.8rem',fontWeight:'bold',width:'10rem'}}>
  <SortIcon />
  <p style={{marginLeft:'0.25rem'}}>
  Sortera efter
  </p>
    
  </Button>
</div>

{loading?<Oval
  height="100"
  width="100"
  radius="9"
  color="green"
  ariaLabel="loading"
/>: <Box sx={{flexGrow:1}}>
  <Grid container spacing={1}>
    {products?.map((el,i)=>(
      <Grid item xs={6} md={6} key={i}>
    <ProductCard product={el} width={'100%'}/>
    </Grid>
    ))}
  </Grid>
</Box>}

    </div>
  )
}

export default CategoryPageProducts