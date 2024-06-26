'use client'

import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const CategoryPageHeeader = ({slug,url,titelSv,seoTextSv}) => {
const [products, seTproducts] = useState([])
const pathname = usePathname()

const [showSeoText, setshowSeoText] = useState(false)
  return (
    <div>
    <Link href={`${pathname}`} style={{fontSize:'0.8rem',color:'lightgray',padding:'0.5rem'}}>{`home${pathname}`}</Link>
    <img src={url} alt='banner-img' style={{maxHeight:'160px',width:'100%'}}/>
    <h1 className='category-page-title'>{titelSv}</h1>

    <div>
 <p className={showSeoText?'show-cat-page-seo':'category-page-seo-text'}>{seoTextSv}</p>
    </div>
    <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
    {showSeoText?    <Button type='button' variant='contained' style={{color:'black',border:'1px solid black',width:'7rem',fontSize:'0.7rem', padding:'0.2rem',width:'2.5rem',margin:'0.5rem auto',textAlign:'center'}} onClick={()=> setshowSeoText(false)}>STÄNG</Button>:
   <Button type='button' variant='contained' style={{color:'black',border:'1px solid black',width:'7rem',fontSize:'0.7rem', padding:'0.2rem',width:'2.5rem',margin:'0.5rem auto',textAlign:'center'}} onClick={()=> setshowSeoText(true)}>LÄS MER</Button>}
   </div>
    </div>
  )
}

export default CategoryPageHeeader