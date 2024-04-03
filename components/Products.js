'use client'

import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import commerce from '../lib/commerce'

const ProductCardList = ({data})=>{
    return <div className='products-container'>
        {data.map((product)=>(
            <ProductCard key={product.id}
                product={product}
            />
        ))}
    </div>
}

const Products = () => {
    const [allProducts, setAllProducts] = useState([])

    const fetchProducts = async()=>{
      try {
        const resp = await fetch('/api/products')
        const data = await resp.json()
        setAllProducts(data.products)
      } catch (error) {
        
      }
    }
    useEffect(()=>{
fetchProducts()
    },[])
  return (
    <div>
         <h2 style={{fontWeight:'bold',fontSize:'1.5rem'}}>Populära produkter </h2>
      <ProductCardList data={allProducts}/>
    </div>
  )
}

export default Products


