'use client'

import React,{useState,useEffect} from 'react'
import Hero from "@components/Hero"
import Products from "@components/Products"

const Home = () => {
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
    <section className='home-root'>
     <Hero /> 
    <Products products={allProducts} title={'Nytt hos oss'}/>
    </section>
  )
}

export default Home