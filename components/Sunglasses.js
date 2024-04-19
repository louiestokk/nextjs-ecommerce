'use client'

import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { Oval } from 'react-loader-spinner'

const Sunglasses = () => { 
    const isLoading = useSelector((state)=> state.loading.isLoadingload)
    const [products, setProducts] = useState([])

const fetchSunGlasses = async()=>{
  try {
    const resp = await fetch('/api/solglasogon')
    const {data} = await resp.json()
   setProducts(data)
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
fetchSunGlasses()
},[])
  return (
    <div style={{margin:'2rem 0'}}>
          <h2 style={{fontWeight:'bold',fontSize:'2.4rem'}} className='populara-produkter'>Solglasögon 2024</h2>
          {isLoading?  <Oval
  height="100"
  width="100"
  radius="9"
  color="green"
  ariaLabel="loading"
/>:  <div className='products-container'>
    {products?.length>0 && products.map((el,i)=>(
        <div key={i}>
           <ProductCard product={el}/>

        </div>
    ))}
    </div>}
    </div>
  )
}

export default Sunglasses