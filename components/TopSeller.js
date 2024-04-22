'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { Oval } from 'react-loader-spinner'
import Link from 'next/link'
const TopSeller = () => {
    const {payload} = useSelector((state)=> state.products.productsArray)
    const isLoading = useSelector((state)=> state.loading.isLoadingload)
  return (
    <div style={{marginTop:'2rem'}}>
    <h2 style={{fontWeight:'bold',fontSize:'2.4rem'}} className='populara-produkter'>Trendar nu </h2>
{isLoading?<Oval
  height="100"
  width="100"
  radius="9"
  color="green"
  ariaLabel="loading"
/>: <div className='products-container'>
    {payload && payload?.length>0 && payload.map((el)=>(
        <div key={el?.id}>
           <ProductCard product={el} width='180px'/>

        </div>
    ))}
    </div>}
   
    <div style={{display:'flex',justifyContent:'center'}}>
    <Link href={'/toppseller'} className='se-fler-link'>SE FLER </Link>
    </div>
    </div>
  )
}

export default TopSeller