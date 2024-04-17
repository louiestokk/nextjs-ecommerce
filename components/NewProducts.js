'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { Oval } from 'react-loader-spinner'
const NewProducts = () => {
    const {payload} = useSelector((state)=> state.products.productsArray)
    const isLoading = useSelector((state)=> state.loading.isLoadingload)
    const products = [].concat(payload).reverse()
    
  return (
    <div>
    <h2 style={{fontWeight:'bold',fontSize:'2.4rem'}} className='populara-produkter'>Nytt hos oss </h2>
    {isLoading?  <Oval
  height="100"
  width="100"
  radius="9"
  color="green"
  ariaLabel="loading"
/>:  <div className='products-container'>
    {products && products?.length>0 && products.map((el)=>(
        <div key={el?.id}>
           <ProductCard product={el}/>

        </div>
    ))}
    </div>}
   

    </div>
  )
}

export default NewProducts