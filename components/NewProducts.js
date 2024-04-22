'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { Oval } from 'react-loader-spinner'
import Link from 'next/link'
const NewProducts = () => {
    const {payload} = useSelector((state)=> state.products.productsArray)
    const isLoading = useSelector((state)=> state.loading.isLoadingload)
    const products = [].concat(payload).reverse()
    
  return (
    <div style={{marginBottom:'2rem'}}>
    <h2 style={{fontWeight:'bold',fontSize:'2.4rem'}} className='populara-produkter'>Nytt hos oss </h2>
    {isLoading?  <Oval
  height="100"
  width="100"
  radius="9"
  color="green"
  ariaLabel="loading"
/>:  <div className='products-container'>
    {products && products?.length>0 && products.map((el,i)=>(
        <div key={i}>
           <ProductCard product={el} width='180px'/>

        </div>
    ))}
    </div>}
    <div style={{display:'flex',justifyContent:'center'}}>
    <Link href={'/nyheter'} className='se-fler-link'>SE FLER </Link>
    </div>
  
    </div>
  )
}

export default NewProducts